# ADR 002: Service-based and Event-driven Hybrid Architecture

## Status
Accepted

## Context
The Business Pages (ZDR program) platform must manage three distinct functional and load profiles:
* [cite_start]**Registration and Administration:** A low-volume but critical process requiring high consistency for Zamunda One identification and domain reservation. [cite: 19, 23, 55, 61]
* [cite_start]**Website Publication:** A series of asynchronous events triggered by GitHub webhooks where file updates and storage quota enforcement occur. [cite: 16, 29, 37, 40]
* [cite_start]**Content Delivery:** High-volume, low-latency access to static HTML, CSS, and JS files from the public internet. [cite: 15, 17, 24]

## Facing the Need for
* [cite_start]**Flexibility and Isolation:** The registration interface must remain operational even during a surge of thousands of simultaneous GitHub webhooks. [cite: 52]
* [cite_start]**Asynchronous Processing:** Downloading, validating, and deploying files from GitHub is time-consuming and must not block the user interface. [cite: 37, 41]
* [cite_start]**Scalability:** The static delivery layer needs to scale independently from the administrative backend to support up to 500,000 requests per minute. [cite: 43, 54]
* [cite_start]**Fault Tolerance:** Network issues or invalid commits should not compromise the entire system; events must be retryable. [cite: 41, 51]

## We Decided for
A **Hybrid Service-based and Event-driven Architecture (EDA)**:
* [cite_start]**Service-based Layer:** Central business logic (domain management, corporate data) is handled by well-defined services sharing a common database. [cite: 19, 23, 27]
* **Event-driven Layer:** Receiving GitHub webhooks generates events in a message queue. [cite_start]These are processed by asynchronous "Worker" components that perform static file deployment and quota verification. [cite: 29, 40]
* [cite_start]**Decoupled Frontend:** Static serving is performed by a dedicated, high-performance web server layer (Edge Nodes/CDN) that only reads the finalized files. [cite: 17, 53]

## Neglecting
* **Monolithic Architecture:** While simpler to develop, a surge in webhooks could paralyze the admin interface, and a single failure could bring down the entire system.
* **Pure Microservices:** Currently adds unnecessary complexity (distributed transactions, network overhead); a service-based approach provides sufficient separation for the current team size.
* **Synchronous API Calls to GitHub:** Waiting for file downloads synchronously would lead to timeout errors and prevent scaling.

## Achieving
* [cite_start]**High Responsiveness:** The administrative portal remains fast as heavy operations run in the background via events. [cite: 35]
* [cite_start]**Automated Workflow:** Seamless GitHub integration allows users to simply "push" code while the EDA layer automatically updates the storage. [cite: 37, 40]
* [cite_start]**Independent Scalability:** Increasing business counts only requires starting more "Deployer Workers" without modifying admin services. [cite: 53]
* [cite_start]**Error Handling:** Updates can be automatically re-run later (Retry logic) due to the event-driven nature. [cite: 41, 51]
* [cite_start]**Compliance:** The principle of static-only content (BR-05) and centralized identification (BR-04) is technologically isolated from the file management layer. [cite: 61, 63]

## Accepting That (We Will Have)
* [cite_start]**Eventual Consistency:** File updates are not instantaneous; there is a p90 60-second delay between a commit and live appearance. [cite: 45]
* [cite_start]**Infrastructural Overhead:** A Message Broker is required between services, which must be independently monitored and backed up. [cite: 46]
* [cite_start]**Complex Debugging:** Tracking asynchronous event flows requires distributed logging and tracing. [cite: 42]
* [cite_start]**Operational Burden:** The lifecycle of Worker processes and queue saturation must be managed for stable operation. [cite: 54]