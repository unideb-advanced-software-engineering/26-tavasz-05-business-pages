---
title: ADR 002 - Service-based and Event-driven Hybrid Architecture
---

# ADR 002: Service-based and Event-driven Hybrid Architecture

## Context
The Business Pages (ZDR program) platform must manage three distinct functional and load profiles:
* **Registration and Administration:** A low-volume but critical process requiring high consistency for Zamunda One identification and domain reservation.
* **Website Publication:** A series of asynchronous events triggered by GitHub webhooks where file updates and storage quota enforcement occur.
* **Content Delivery:** High-volume, low-latency access to static HTML, CSS, and JS files from the public internet.

## Facing the Need for
* **Flexibility and Isolation:** The registration interface must remain operational even during a surge of thousands of simultaneous GitHub webhooks.
* **Asynchronous Processing:** Downloading, validating, and deploying files from GitHub is time-consuming and must not block the user interface.
* **Scalability:** The static delivery layer needs to scale independently from the administrative backend to support up to 500,000 requests per minute.
* **Fault Tolerance:** Network issues or invalid commits should not compromise the entire system; events must be retryable.

## We Decided for
A **Hybrid Service-based and Event-driven Architecture (EDA)**:
* **Service-based Layer:** Central business logic (domain management, corporate data) is handled by well-defined services sharing a common database.
* **Event-driven Layer:** Receiving GitHub webhooks generates events in a message queue. These are processed by asynchronous "Worker" components that perform static file deployment and quota verification.
* **Decoupled Frontend:** Static serving is performed by a dedicated, high-performance web server layer (Edge Nodes/CDN) that only reads the finalized files.

## Neglecting
* **Monolithic Architecture:** While simpler to develop, a surge in webhooks could paralyze the admin interface, and a single failure could bring down the entire system.
* **Pure Microservices:** Currently adds unnecessary complexity (distributed transactions, network overhead); a service-based approach provides sufficient separation for the current team size.
* **Synchronous API Calls to GitHub:** Waiting for file downloads synchronously would lead to timeout errors and prevent scaling.

## Achieving
* **High Responsiveness:** The administrative portal remains fast as heavy operations run in the background via events.
* **Automated Workflow:** Seamless GitHub integration allows users to simply "push" code while the EDA layer automatically updates the storage.
* **Independent Scalability:** Increasing business counts only requires starting more "Deployer Workers" without modifying admin services.
* **Error Handling:** Updates can be automatically re-run later (Retry logic) due to the event-driven nature.
* **Compliance:** The principle of static-only content (BR-05) and centralized identification (BR-04) is technologically isolated from the file management layer.

## Accepting That (We Will Have)
* **Eventual Consistency:** File updates are not instantaneous; there is a p90 60-second delay between a commit and live appearance.
* **Infrastructural Overhead:** A Message Broker is required between services, which must be independently monitored and backed up.
* **Complex Debugging:** Tracking asynchronous event flows requires distributed logging and tracing.
* **Operational Burden:** The lifecycle of Worker processes and queue saturation must be managed for stable operation.
