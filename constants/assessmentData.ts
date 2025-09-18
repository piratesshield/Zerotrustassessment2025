import { AssessmentData } from '../types';

export const assessmentData: AssessmentData = {
  pillars: {
    "Identity": {
      "weight": 0.20, "icon": "🔐", "description": "Identity verification, access management, and privileged access controls.",
      "questions": [
        {
          "id": "identity_1",
          "question": "Do you have a centralized identity directory that synchronizes with all identity sources?",
          "description": "A centralized identity directory (e.g., Azure AD, Okta) acts as the single source of truth, ensuring consistent policy enforcement and simplifying identity and access management (IAM) across the entire digital estate.",
          "category": "Identity Infrastructure",
          "examples": ["Azure AD Connect Sync", "Okta Universal Directory", "Directory Federation"],
          "options": [
            { "text": "Yes, a single cloud directory is the source of truth for all identities.", "points": 3, "risk": "Low", "recommendation": "Focus on advanced identity governance, including automated lifecycle management (joiner-mover-leaver) and regular access reviews to maintain a state of least privilege." },
            { "text": "Yes, but we synchronize multiple on-premises and cloud directories.", "points": 2, "risk": "Medium", "recommendation": "Develop a strategy to consolidate directories and reduce reliance on on-premises infrastructure. Monitor synchronization health closely to prevent identity fragmentation." },
            { "text": "No, identity sources are fragmented and not synchronized.", "points": 0, "risk": "Critical", "recommendation": "Prioritize the implementation of a centralized identity provider and synchronize all identity sources immediately. This is a foundational requirement for any Zero Trust strategy." }
          ]
        },
        {
          "id": "identity_2",
          "question": "Is your identity provider integrated with all business applications?",
          "description": "Integrating all applications (SaaS, on-prem, legacy) with a central identity provider enables Single Sign-On (SSO) and allows for the consistent application of security policies like MFA and conditional access.",
          "category": "Application Integration",
          "examples": ["SAML/OIDC Federation", "Azure AD Application Proxy", "Okta SWA"],
          "options": [
            { "text": "Yes, all applications are integrated for SSO.", "points": 3, "risk": "Low", "recommendation": "Conduct regular audits of application permissions and user assignments. Implement automated application discovery to identify and manage shadow IT." },
            { "text": "Most key applications are integrated, but legacy or niche apps are not.", "points": 1, "risk": "Medium", "recommendation": "Prioritize the integration of remaining applications, especially those handling sensitive data. Utilize application proxies or secure web gateways for legacy apps that don't support modern protocols." },
            { "text": "No, applications use separate, siloed credentials.", "points": 0, "risk": "High", "recommendation": "Initiate a project to inventory all applications and integrate them with your central identity provider. This is crucial for gaining visibility and control over application access." }
          ]
        },
        {
          "id": "identity_3",
          "question": "Are comprehensive conditional access policies implemented?",
          "description": "Conditional Access is the core of a Zero Trust policy engine, evaluating signals like user, device, location, and risk to make real-time, granular access decisions for each resource.",
          "category": "Conditional Access",
          "examples": ["Require MFA from non-compliant devices", "Block access from untrusted locations", "Limit session for high-risk users"],
          "options": [
            { "text": "Yes, granular, adaptive policies are applied to all applications.", "points": 3, "risk": "Low", "recommendation": "Continuously refine policies based on threat intelligence and user behavior. Utilize 'what-if' tools to test policy changes before deployment and minimize user impact." },
            { "text": "Yes, but policies are basic (e.g., global MFA enforcement only).", "points": 1, "risk": "Medium", "recommendation": "Enhance policies by incorporating more context, such as device compliance, sign-in risk, and application sensitivity, to move towards a more adaptive and granular security posture." },
            { "text": "No, access controls are static and not context-aware.", "points": 0, "risk": "Critical", "recommendation": "Implement baseline Conditional Access policies immediately, starting with enforcing MFA for all users, blocking legacy authentication, and requiring healthy devices for critical apps." }
          ]
        },
        {
          "id": "identity_4",
          "question": "Is Multi-Factor Authentication (MFA) enforced for all user accounts?",
          "description": "Enforcing MFA is the single most effective control to prevent identity-based attacks, protecting against credential theft and unauthorized access.",
          "category": "Authentication Methods",
          "examples": ["Authenticator App (Push/TOTP)", "FIDO2 Security Keys", "Windows Hello for Business"],
          "options": [
            { "text": "Yes, phishing-resistant MFA (FIDO2, Windows Hello) is enforced for all users.", "points": 4, "risk": "Low", "recommendation": "Focus on driving user adoption and ensuring robust recovery processes are in place. Expand the use of phishing-resistant MFA to all access scenarios, including remote access and command-line tools." },
            { "text": "Yes, but primarily using less secure methods like SMS or basic push notifications.", "points": 2, "risk": "Medium", "recommendation": "Develop a roadmap to migrate users away from SMS and basic push notifications towards more secure, phishing-resistant methods. Enable number matching in authenticator apps." },
            { "text": "MFA is enforced only for privileged accounts or specific applications.", "points": 1, "risk": "High", "recommendation": "Expand MFA enforcement to all user accounts immediately. Attackers often target standard user accounts to establish an initial foothold before moving laterally." },
            { "text": "No, MFA is not consistently enforced.", "points": 0, "risk": "Critical", "recommendation": "Deploy MFA for all users as an emergency measure. This is a foundational security control that addresses the most common attack vectors." }
          ]
        },
        {
          "id": "identity_5",
          "question": "Are passwordless authentication methods deployed?",
          "description": "Passwordless authentication improves user experience and enhances security by eliminating the risks associated with passwords, such as phishing, credential stuffing, and theft.",
          "category": "Authentication Methods",
          "examples": ["FIDO2 Security Keys", "Windows Hello for Business", "Phone Sign-in (Authenticator App)"],
          "options": [
            { "text": "Yes, passwordless is the primary authentication method for most users.", "points": 3, "risk": "Low", "recommendation": "Work towards completely eliminating passwords from the user experience. Ensure your passwordless deployment includes strong device-bound credentials and robust account recovery options." },
            { "text": "Yes, deployed for specific user groups (e.g., IT, executives).", "points": 1, "risk": "Medium", "recommendation": "Expand your passwordless deployment to a broader user base. Create an adoption campaign highlighting the security and convenience benefits to drive user acceptance." },
            { "text": "No, authentication is entirely password-based.", "points": 0, "risk": "High", "recommendation": "Begin piloting passwordless authentication methods, starting with FIDO2 keys for privileged users. This is a key step in building a modern, phishing-resistant authentication strategy." }
          ]
        },
        {
          "id": "identity_6",
          "question": "Is risk-based authentication implemented using behavioral analytics?",
          "description": "Risk-based authentication uses machine learning to analyze signals in real-time (e.g., location, device, user behavior) to detect anomalous access attempts and automatically trigger protective actions.",
          "category": "Risk-Based Access",
          "examples": ["Azure AD Identity Protection", "Okta Adaptive MFA", "Behavioral Anomaly Detection"],
          "options": [
            { "text": "Yes, user and sign-in risk levels automatically adapt access policies.", "points": 3, "risk": "Low", "recommendation": "Fine-tune risk policies to balance security and user friction. Integrate risk signals from your EDR and other security tools to enrich the policy engine's context." },
            { "text": "We have risk detection, but it's primarily for alerting, not automated enforcement.", "points": 1, "risk": "Medium", "recommendation": "Transition from a 'monitor-only' mode to automated enforcement. Configure policies to automatically require MFA, force a password reset, or block access for high-risk sign-ins." },
            { "text": "No, risk is not a factor in our authentication process.", "points": 0, "risk": "High", "recommendation": "Enable and configure a risk-based authentication solution. Without it, you are blind to sophisticated identity attacks like impossible travel, credential leaks, and anomalous sign-ins." }
          ]
        },
        {
          "id": "identity_7",
          "question": "Is Privileged Access Management (PAM) implemented for administrative accounts?",
          "description": "PAM solutions protect highly privileged accounts by enforcing principles like least privilege, just-in-time access, and robust auditing, which are critical for preventing widespread breaches.",
          "category": "Privileged Access",
          "examples": ["Azure PIM", "CyberArk", "Delinea", "BeyondTrust"],
          "options": [
            { "text": "Yes, a comprehensive PAM solution with session monitoring is used for all privileged roles.", "points": 3, "risk": "Low", "recommendation": "Integrate your PAM solution with your SIEM for advanced threat detection. Regularly audit privileged access and reduce the number of standing, permanently privileged accounts." },
            { "text": "Basic controls are in place, like separate admin accounts, but no dedicated PAM tool.", "points": 1, "risk": "Medium", "recommendation": "Implement a dedicated PAM solution to gain capabilities like credential vaulting, session recording, and just-in-time elevation. Manual management of privileged access is error-prone and lacks visibility." },
            { "text": "No, administrators use standard accounts or shared privileged accounts.", "points": 0, "risk": "Critical", "recommendation": "Deploy a PAM solution immediately. Unmanaged privileged accounts are a primary target for attackers seeking to gain full control of your environment." }
          ]
        },
        {
          "id": "identity_8",
          "question": "Are Just-in-Time (JIT) access controls implemented?",
          "description": "JIT access provides temporary, time-bound elevation to privileged roles, drastically reducing the attack surface by eliminating standing administrative privileges.",
          "category": "Privileged Access",
          "examples": ["Azure PIM role activation", "Time-based access grants", "On-demand privilege elevation"],
          "options": [
            { "text": "Yes, JIT is the default for all administrative and sensitive roles.", "points": 3, "risk": "Low", "recommendation": "Automate the approval process for JIT requests where appropriate, based on user context and resource sensitivity. Ensure all JIT sessions are fully audited and logged." },
            { "text": "JIT is available but not consistently enforced; many standing privileges remain.", "points": 1, "risk": "Medium", "recommendation": "Conduct a comprehensive review of all privileged roles and convert them to be eligible for JIT access. The goal should be to have zero standing administrative privileges." },
            { "text": "No, privileged access is permanent and standing.", "points": 0, "risk": "Critical", "recommendation": "Implement a JIT solution as part of your PAM strategy. Standing privileges create a persistent, high-value target for attackers and violate the principle of least privilege." }
          ]
        },
        {
          "id": "identity_9",
          "question": "Is User and Entity Behavior Analytics (UEBA) integrated?",
          "description": "UEBA establishes baseline behaviors for users and devices, using machine learning to detect anomalous activities that could indicate an insider threat or compromised account.",
          "category": "Threat Detection",
          "examples": ["Microsoft Sentinel UEBA", "Splunk UBA", "Exabeam"],
          "options": [
            { "text": "Yes, UEBA is fully integrated with our SIEM and triggers automated responses.", "points": 3, "risk": "Low", "recommendation": "Fine-tune UEBA models to reduce false positives. Correlate UEBA alerts with signals from other security tools (EDR, DLP) to get a holistic view of potential threats." },
            { "text": "UEBA is deployed but primarily used for investigation rather than proactive alerting.", "points": 1, "risk": "Medium", "recommendation": "Develop and enable automated detection rules and SOAR playbooks based on high-fidelity UEBA alerts to improve your detection and response capabilities." },
            { "text": "No, we do not use behavioral analytics for threat detection.", "points": 0, "risk": "High", "recommendation": "Implement a UEBA solution to move beyond signature-based detection. UEBA is essential for detecting sophisticated, low-and-slow attacks and insider threats." }
          ]
        },
        {
          "id": "identity_10",
          "question": "Do you support secure external partner access (B2B)?",
          "description": "Secure B2B collaboration allows external partners to access necessary resources using their own corporate identities, while your organization maintains full control and visibility over that access.",
          "category": "External Access",
          "examples": ["Azure AD B2B Collaboration", "Okta B2B Integration", "Federated Trusts"],
          "options": [
            { "text": "Yes, a comprehensive B2B solution with guest access reviews is in place.", "points": 2, "risk": "Low", "recommendation": "Automate the guest user lifecycle, including regular access reviews and automatic account disabling after a period of inactivity, to prevent stale guest accounts." },
            { "text": "We provide access, but it's ad-hoc (e.g., creating local accounts for partners).", "points": 1, "risk": "Medium", "recommendation": "Transition to a formal B2B identity federation solution. Creating local accounts for partners increases management overhead and security risk." },
            { "text": "No, we do not have a secure method for external collaboration.", "points": 0, "risk": "High", "recommendation": "Implement a B2B collaboration solution. Insecure methods (like sharing credentials or emailing sensitive files) create significant data breach risks." }
          ]
        }
      ]
    },
    "Data": {
      "weight": 0.18, "icon": "🗃️", "description": "Data protection, classification, governance, and loss prevention.",
      "questions": [
        {
          "id": "data_1",
          "question": "Is a comprehensive data classification scheme implemented?",
          "description": "A data classification scheme defines data sensitivity levels (e.g., Public, Internal, Confidential), which serves as the foundation for applying appropriate security controls.",
          "category": "Data Governance",
          "examples": ["4-tier classification (Public, Internal, Confidential, Restricted)", "Regulatory-based labels (GDPR, PCI)", "Traffic Light Protocol (TLP)"],
          "options": [
            { "text": "Yes, a clear, documented scheme is adopted and understood across the organization.", "points": 2, "risk": "Low", "recommendation": "Regularly review and update the classification scheme to align with evolving business needs and regulatory requirements. Ensure new employee onboarding includes training on data handling." },
            { "text": "A scheme exists but is not consistently applied or well-known.", "points": 1, "risk": "Medium", "recommendation": "Launch an awareness campaign to educate employees on the classification scheme. Integrate the scheme into your data protection tools to drive consistent application." },
            { "text": "No, there is no formal data classification scheme.", "points": 0, "risk": "Critical", "recommendation": "Develop and implement a simple, clear data classification scheme immediately. Without it, you cannot systematically apply protection policies like encryption or DLP." }
          ]
        },
        {
          "id": "data_2",
          "question": "Are automated data classification tools deployed?",
          "description": "Automated tools scan data at rest and in motion to identify and apply classification labels based on content inspection, reducing reliance on manual user labeling and ensuring consistent policy.",
          "category": "Data Discovery",
          "examples": ["Microsoft Purview", "Varonis", "AWS Macie"],
          "options": [
            { "text": "Yes, automated and AI-driven classification is applied across all data repositories.", "points": 3, "risk": "Low", "recommendation": "Fine-tune classifiers to improve accuracy and reduce false positives. Use the classification results to drive automated data governance actions, such as applying encryption or restricting access." },
            { "text": "We use some tools, but they are limited to specific repositories or rely on simple patterns.", "points": 1, "risk": "Medium", "recommendation": "Expand the scope of your automated classification tools to cover all critical data stores, including cloud, on-premises, and endpoints. Invest in trainable classifiers for custom data types." },
            { "text": "No, classification is entirely manual or non-existent.", "points": 0, "risk": "High", "recommendation": "Deploy an automated data classification tool. Manual classification is not scalable or reliable enough to protect data in a modern enterprise environment." }
          ]
        },
        {
          "id": "data_3",
          "question": "Is Data Loss Prevention (DLP) implemented across all channels?",
          "description": "DLP policies identify and prevent the unauthorized exfiltration of sensitive data across endpoints, networks, email, and cloud applications.",
          "category": "Data Loss Prevention",
          "examples": ["Microsoft Purview DLP", "Endpoint DLP agents", "CASB with DLP integration"],
          "options": [
            { "text": "Yes, a unified DLP policy is enforced across endpoints, cloud services, and email.", "points": 3, "risk": "Low", "recommendation": "Refine DLP policies to minimize false positives and business friction. Use user coaching and education within DLP alerts to improve security awareness." },
            { "text": "DLP is implemented for specific channels only, such as email.", "points": 1, "risk": "Medium", "recommendation": "Expand DLP coverage to all data egress points, particularly endpoints and cloud applications, to close gaps in your data protection strategy." },
            { "text": "No, we do not have a DLP solution in place.", "points": 0, "risk": "Critical", "recommendation": "Implement a DLP solution immediately, starting with a 'monitor-only' mode to baseline data flows before moving to active blocking. Protecting against data exfiltration is a core CISO responsibility." }
          ]
        },
        {
          "id": "data_4",
          "question": "Is data encrypted at rest across all storage systems?",
          "description": "Encrypting data at rest protects information stored on disks, in databases, and in cloud storage from unauthorized access, even if the physical media is compromised.",
          "category": "Data Encryption",
          "examples": ["Azure Storage Service Encryption", "AWS S3 SSE", "BitLocker, FileVault"],
          "options": [
            { "text": "Yes, all data is encrypted at rest using strong, modern algorithms.", "points": 2, "risk": "Low", "recommendation": "Ensure you have a robust key management strategy. Audit encryption settings regularly to confirm compliance with your policies." },
            { "text": "Encryption is applied to some systems but not universally.", "points": 1, "risk": "Medium", "recommendation": "Prioritize encrypting all remaining data repositories, especially those containing sensitive or regulated data. Most modern platforms offer this capability by default." },
            { "text": "No, data at rest is generally not encrypted.", "points": 0, "risk": "High", "recommendation": "Enable encryption at rest for all storage systems. This is a foundational security control and a common compliance requirement." }
          ]
        },
        {
          "id": "data_5",
          "question": "Is data encrypted in transit across all communication channels?",
          "description": "Encrypting data in transit protects information as it moves across networks, preventing eavesdropping and man-in-the-middle attacks.",
          "category": "Data Encryption",
          "examples": ["TLS 1.2/1.3", "IPsec VPNs", "SSH"],
          "options": [
            { "text": "Yes, all internal and external traffic is encrypted using strong protocols (e.g., TLS 1.3).", "points": 2, "risk": "Low", "recommendation": "Implement policies to block weak cryptographic protocols and cipher suites. Use tools to continuously scan for and remediate insecure configurations." },
            { "text": "Only external traffic is encrypted; internal traffic is often in cleartext.", "points": 1, "risk": "Medium", "recommendation": "Assume the internal network is compromised and enforce encryption for all traffic. This is a core principle of Zero Trust and prevents lateral movement attacks." },
            { "text": "No, encryption in transit is not consistently enforced.", "points": 0, "risk": "High", "recommendation": "Enforce TLS for all communications immediately. This is a fundamental security practice that protects data from interception." }
          ]
        },
        {
          "id": "data_6",
          "question": "Is centralized encryption key management implemented?",
          "description": "A centralized Key Management System (KMS) provides secure generation, storage, rotation, and auditing of cryptographic keys, ensuring control over your encrypted data.",
          "category": "Data Encryption",
          "examples": ["Azure Key Vault", "AWS KMS", "HashiCorp Vault"],
          "options": [
            { "text": "Yes, a dedicated KMS/HSM manages the lifecycle of all encryption keys.", "points": 3, "risk": "Low", "recommendation": "Implement a 'Bring Your Own Key' (BYOK) or 'Hold Your Own Key' (HYOK) strategy for critical cloud data to maintain ultimate control over your keys." },
            { "text": "Keys are managed, but the process is decentralized or ad-hoc.", "points": 1, "risk": "Medium", "recommendation": "Consolidate key management into a centralized, dedicated solution. Decentralized key management leads to inconsistent security and increased risk of key compromise." },
            { "text": "No, keys are managed by individual applications or not at all.", "points": 0, "risk": "Critical", "recommendation": "Deploy a centralized KMS immediately. Losing control of your encryption keys is equivalent to losing your data." }
          ]
        },
        {
          "id": "data_7",
          "question": "Are comprehensive data governance policies enforced?",
          "description": "Data governance policies define data ownership, retention, and disposal rules, ensuring data is managed appropriately throughout its lifecycle and reducing the organizational risk profile.",
          "category": "Data Governance",
          "examples": ["Data retention policies", "Data ownership roles", "Automated data lifecycle management"],
          "options": [
            { "text": "Yes, automated policies for data retention and disposal are enforced across all systems.", "points": 2, "risk": "Low", "recommendation": "Regularly audit your data governance policies to ensure they align with legal and regulatory requirements. Use data discovery tools to find and remediate 'dark data' that falls outside of governance." },
            { "text": "Policies exist but are enforced manually and inconsistently.", "points": 1, "risk": "Medium", "recommendation": "Automate the enforcement of your data governance policies. Manual processes are not scalable and lead to inconsistent application and increased risk." },
            { "text": "No, there are no formal data governance policies.", "points": 0, "risk": "High", "recommendation": "Establish a data governance framework. Keeping unnecessary data increases your attack surface and storage costs, and may violate compliance regulations." }
          ]
        },
        {
          "id": "data_8",
          "question": "Are granular data access controls implemented?",
          "description": "Granular controls go beyond simple read/write permissions, enforcing access based on context (user role, location, device) and data sensitivity, adhering to the principle of least privilege.",
          "category": "Data Access",
          "examples": ["Attribute-Based Access Control (ABAC)", "Dynamic access policies", "Just-in-Time data access"],
          "options": [
            { "text": "Yes, access is determined dynamically based on data labels and user attributes.", "points": 3, "risk": "Low", "recommendation": "Implement automated access reviews and certifications for sensitive data to ensure permissions remain appropriate over time." },
            { "text": "We use role-based access control (RBAC), but it's not very granular.", "points": 1, "risk": "Medium", "recommendation": "Enhance your RBAC model with more granular roles. Begin exploring attribute-based access control (ABAC) for your most sensitive data repositories." },
            { "text": "No, access is based on broad, static permissions (e.g., 'everyone' has access).", "points": 0, "risk": "Critical", "recommendation": "Implement a formal access control model like RBAC immediately. Overly permissive access is a primary cause of data breaches." }
          ]
        },
        {
          "id": "data_9",
          "question": "Are data discovery tools identifying sensitive data?",
          "description": "You can't protect what you don't know you have. Data discovery tools continuously scan all repositories to find, classify, and report on the location of sensitive and regulated data.",
          "category": "Data Discovery",
          "examples": ["Microsoft Purview eDiscovery", "Varonis Data Classification", "Nightfall DLP"],
          "options": [
            { "text": "Yes, we have continuous and comprehensive data discovery across all environments.", "points": 2, "risk": "Low", "recommendation": "Integrate your data discovery results with your risk management and compliance reporting processes. Use the findings to prioritize security investments." },
            { "text": "We perform periodic or ad-hoc scans for sensitive data.", "points": 1, "risk": "Medium", "recommendation": "Move from periodic scans to a continuous data discovery model. Data is created and moved constantly, and periodic scans will always miss things." },
            { "text": "No, we do not have a systematic way to discover sensitive data.", "points": 0, "risk": "High", "recommendation": "Deploy a data discovery tool. Without it, you are likely non-compliant and have significant unknown data risks across your organization." }
          ]
        },
        {
          "id": "data_10",
          "question": "Are Cloud Access Security Brokers (CASB) protecting cloud data?",
          "description": "A CASB acts as a control point between your users and cloud services, enforcing security policies for data in transit and at rest in the cloud, and protecting against cloud-specific threats.",
          "category": "Cloud Security",
          "examples": ["Microsoft Defender for Cloud Apps", "Netskope", "Palo Alto Prisma SaaS"],
          "options": [
            { "text": "Yes, a CASB is fully integrated and enforces data protection policies for all sanctioned cloud apps.", "points": 3, "risk": "Low", "recommendation": "Utilize the User and Entity Behavior Analytics (UEBA) capabilities of your CASB to detect and respond to anomalous activity within your cloud applications." },
            { "text": "A CASB is used, but primarily for visibility ('shadow IT' discovery) rather than active protection.", "points": 1, "risk": "Medium", "recommendation": "Move from discovery mode to active policy enforcement. Use your CASB to enforce DLP, threat protection, and adaptive access controls for your key SaaS applications." },
            { "text": "No, we do not use a CASB.", "points": 0, "risk": "High", "recommendation": "Implement a CASB to gain visibility and control over your cloud application landscape. Unmanaged cloud usage is a major blind spot and a significant source of data risk." }
          ]
        }
      ]
    },
    "Device": {
        "weight": 0.17, "icon": "📱", "description": "Device security, management, compliance, and threat protection.",
        "questions": [
            {
                "id": "device_1",
                "question": "Do you maintain real-time inventory of all devices?",
                "description": "A complete and real-time inventory of all devices (corporate, BYOD, IoT) connecting to your resources is the foundation for device security and management.",
                "category": "Asset Management",
                "examples": ["Microsoft Intune Device Inventory", "CrowdStrike Falcon Discover", "Asset Management DB"],
                "options": [
                    { "text": "Yes, a real-time, comprehensive inventory of all devices is maintained.", "points": 2, "risk": "Low", "recommendation": "Integrate your device inventory with your CMDB and security tools (like your SIEM) to enrich security alerts and improve incident response." },
                    { "text": "We have an inventory, but it's manually updated or incomplete.", "points": 1, "risk": "Medium", "recommendation": "Implement an automated device discovery and inventory solution. Manual inventories are always out-of-date and lead to security blind spots." },
                    { "text": "No, we do not have a centralized device inventory.", "points": 0, "risk": "High", "recommendation": "Establish a comprehensive device inventory immediately. You cannot secure devices that you do not know exist." }
                ]
            },
            {
                "id": "device_2",
                "question": "Are devices managed by MDM/UEM solutions?",
                "description": "Mobile Device Management (MDM) or Unified Endpoint Management (UEM) solutions allow you to enforce security configurations, deploy applications, and manage compliance across all endpoints.",
                "category": "Endpoint Management",
                "examples": ["Microsoft Intune", "VMware Workspace ONE", "Jamf"],
                "options": [
                    { "text": "Yes, all endpoints (laptops, mobiles) are centrally managed by a UEM solution.", "points": 3, "risk": "Low", "recommendation": "Leverage your UEM to enforce advanced security policies, such as application control, conditional access, and automated patching." },
                    { "text": "Only corporate-owned devices are managed; BYOD is unmanaged.", "points": 1, "risk": "Medium", "recommendation": "Implement Mobile Application Management (MAM) or other BYOD-friendly controls to protect corporate data on personal devices without managing the entire device." },
                    { "text": "No, devices are not centrally managed.", "points": 0, "risk": "Critical", "recommendation": "Deploy a UEM solution to gain basic control and visibility over your endpoints. Unmanaged devices are a major security risk." }
                ]
            },
            {
                "id": "device_3",
                "question": "Is Endpoint Detection and Response (EDR) deployed?",
                "description": "EDR solutions provide advanced threat detection, investigation, and response capabilities on endpoints by continuously monitoring for suspicious activity and providing rich telemetry.",
                "category": "Threat Detection",
                "examples": ["Microsoft Defender for Endpoint", "CrowdStrike Falcon", "SentinelOne"],
                "options": [
                    { "text": "Yes, EDR is deployed on all endpoints with automated response actions enabled.", "points": 3, "risk": "Low", "recommendation": "Integrate EDR signals into your SIEM and SOAR platforms to correlate endpoint threats with other security data and automate response playbooks." },
                    { "text": "EDR is deployed, but it's primarily used in a detect-only mode.", "points": 1, "risk": "Medium", "recommendation": "Enable automated response and remediation features in your EDR solution to reduce attacker dwell time and analyst workload." },
                    { "text": "No, we only use traditional antivirus (AV).", "points": 0, "risk": "Critical", "recommendation": "Upgrade from traditional AV to a modern EDR solution. Signature-based AV is ineffective against modern fileless malware and advanced threats." }
                ]
            },
            {
                "id": "device_4",
                "question": "Are Extended Detection and Response (XDR) capabilities implemented?",
                "description": "XDR extends the capabilities of EDR by integrating telemetry from multiple security layers (email, identity, cloud) to provide a unified view of an attack chain and enable cross-domain response.",
                "category": "Threat Detection",
                "examples": ["Microsoft 365 Defender", "Palo Alto Cortex XDR", "CrowdStrike Falcon XDR"],
                "options": [
                    { "text": "Yes, a unified XDR platform correlates signals across our security stack.", "points": 3, "risk": "Low", "recommendation": "Focus on developing custom detection rules and automated hunting queries within your XDR platform to proactively search for threats specific to your environment." },
                    { "text": "We have multiple security tools but they are not integrated in an XDR framework.", "points": 1, "risk": "Medium", "recommendation": "Invest in an XDR platform or integrate your existing tools with your SIEM/SOAR to achieve XDR-like capabilities. Siloed tools lead to missed detections and slow response." },
                    { "text": "No, our security tools operate in silos.", "points": 0, "risk": "High", "recommendation": "Develop a strategy to move towards an XDR architecture. The ability to correlate threats across domains is critical for defending against sophisticated attacks." }
                ]
            },
            {
                "id": "device_5",
                "question": "Are automated device compliance policies enforced?",
                "description": "Device compliance policies, enforced by your UEM, continuously check if devices meet your security requirements (e.g., OS version, encryption, AV status) before granting access.",
                "category": "Compliance",
                "examples": ["Intune Compliance Policies", "Device health checks", "CIS benchmark compliance"],
                "options": [
                    { "text": "Yes, compliance policies are automatically enforced and integrated with Conditional Access.", "points": 2, "risk": "Low", "recommendation": "Enhance compliance policies with signals from your EDR/MTD solution to include a device risk score as a condition for access." },
                    { "text": "We have policies, but enforcement is manual or inconsistent.", "points": 1, "risk": "Medium", "recommendation": "Automate the enforcement of your compliance policies and integrate them with your identity provider to make device health a prerequisite for resource access." },
                    { "text": "No, we do not have formal device compliance policies.", "points": 0, "risk": "High", "recommendation": "Define and implement device compliance policies immediately. Allowing non-compliant devices to access corporate data is a significant security risk." }
                ]
            },
            {
                "id": "device_6",
                "question": "Is continuous device posture assessment implemented?",
                "description": "Continuous assessment goes beyond one-time compliance checks, constantly monitoring the device's security posture and risk level in real-time.",
                "category": "Compliance",
                "examples": ["Real-time vulnerability scanning", "EDR risk score", "Continuous configuration monitoring"],
                "options": [
                    { "text": "Yes, device posture is continuously assessed, and risk scores are updated in real-time.", "points": 3, "risk": "Low", "recommendation": "Use the real-time device risk score as a primary signal in your adaptive access policies to enable more dynamic and granular control." },
                    { "text": "Device posture is assessed periodically (e.g., daily).", "points": 1, "risk": "Medium", "recommendation": "Move from periodic to continuous, real-time posture assessment. A device's state can change from secure to compromised in seconds." },
                    { "text": "No, device posture is only checked at enrollment.", "points": 0, "risk": "High", "recommendation": "Implement a solution for continuous device posture assessment. A one-time check at enrollment provides a false sense of security." }
                ]
            },
            {
                "id": "device_7",
                "question": "Are device trust scores used in access decisions?",
                "description": "Device trust is a calculated score based on multiple factors (identity, compliance, risk, location) that is used by the policy engine to make dynamic access decisions.",
                "category": "Risk-Based Access",
                "examples": ["Conditional Access with device risk", "ZTNA with device posture checks", "Adaptive access policies"],
                "options": [
                    { "text": "Yes, a dynamic device trust score is a key input for all access decisions.", "points": 3, "risk": "Low", "recommendation": "Incorporate a wider range of signals into your device trust calculation, including user behavior analytics and threat intelligence, for a more accurate score." },
                    { "text": "We use binary device state (compliant/non-compliant) but not a trust score.", "points": 1, "risk": "Medium", "recommendation": "Evolve from a binary compliance model to a dynamic trust score. This allows for more granular policies, such as allowing limited access for medium-risk devices." },
                    { "text": "No, device state is not considered in access decisions.", "points": 0, "risk": "Critical", "recommendation": "Integrate device compliance and risk into your access policies. Assuming a device is secure simply because the user has the right credentials is a violation of Zero Trust principles." }
                ]
            },
            {
                "id": "device_8",
                "question": "Can compromised devices be automatically isolated?",
                "description": "Automated isolation capabilities in your EDR/XDR solution can instantly remove a compromised device from the network, containing the threat and preventing lateral movement.",
                "category": "Incident Response",
                "examples": ["EDR device isolation", "Automated network quarantine", "SOAR playbook for containment"],
                "options": [
                    { "text": "Yes, devices are automatically isolated based on high-confidence EDR/XDR alerts.", "points": 3, "risk": "Low", "recommendation": "Develop tiered response actions. For example, automatically isolate devices with confirmed malware but only restrict access for devices with suspicious activity." },
                    { "text": "Isolation is a manual process performed by the SOC.", "points": 1, "risk": "Medium", "recommendation": "Automate the device isolation process. Manual response is too slow to effectively contain modern, fast-moving threats like ransomware." },
                    { "text": "No, we do not have the capability to isolate devices.", "points": 0, "risk": "High", "recommendation": "Implement an EDR/XDR solution with automated isolation capabilities. The ability to contain a threat quickly is critical to minimizing the impact of a breach." }
                ]
            },
            {
                "id": "device_9",
                "question": "Is Mobile Threat Defense (MTD) implemented?",
                "description": "MTD solutions protect mobile devices (iOS, Android) from threats like malicious apps, network attacks, and OS vulnerabilities, integrating with UEM to enforce compliance.",
                "category": "Mobile Security",
                "examples": ["Microsoft Defender for Endpoint (Mobile)", "Lookout Mobile Security", "Zimperium"],
                "options": [
                    { "text": "Yes, an MTD solution is deployed on all managed mobile devices.", "points": 2, "risk": "Low", "recommendation": "Use the risk signals from your MTD solution as a key input into your conditional access policies for mobile devices." },
                    { "text": "We rely on the native security features of the mobile OS.", "points": 1, "risk": "Medium", "recommendation": "Supplement native OS security with a dedicated MTD solution. MTD provides more advanced protection against phishing, malicious apps, and network-level attacks." },
                    { "text": "No, we have no specific threat defense for mobile devices.", "points": 0, "risk": "High", "recommendation": "Deploy an MTD solution, especially if you have a significant BYOD population. Mobile devices are increasingly targeted by attackers and are a major blind spot for many organizations." }
                ]
            },
            {
                "id": "device_10",
                "question": "Are hardware security features utilized for device integrity?",
                "description": "Modern hardware includes security features like TPM and Secure Boot that can attest to the integrity of the device's boot process, ensuring it hasn't been tampered with by rootkits or bootkits.",
                "category": "Hardware Security",
                "examples": ["Windows Secured-core PC", "TPM-based attestation", "Secure Boot"],
                "options": [
                    { "text": "Yes, we use hardware-based attestation to verify device integrity in our access policies.", "points": 2, "risk": "Low", "recommendation": "Standardize on hardware that supports strong, hardware-based security features (e.g., Secured-core PCs) as part of your device procurement process." },
                    { "text": "These features are enabled on devices but not actively used for access control.", "points": 1, "risk": "Medium", "recommendation": "Incorporate device integrity attestation into your compliance and conditional access policies. This provides a strong, hardware-rooted guarantee of device health." },
                    { "text": "No, we do not utilize these hardware security features.", "points": 0, "risk": "High", "recommendation": "Enable and enforce features like Secure Boot and leverage TPM capabilities for credential protection and integrity checks. This hardens your devices against low-level attacks." }
                ]
            }
        ]
    },
    "Network": {
        "weight": 0.15, "icon": "🌐", "description": "Network architecture, segmentation, encryption, and Zero Trust networking.",
        "questions": [
            {
                "id": "network_1",
                "question": "Is network micro-segmentation implemented?",
                "description": "Micro-segmentation involves dividing the network into small, isolated zones to limit lateral movement. In a Zero Trust model, this often means creating a segment for each individual workload.",
                "category": "Network Segmentation",
                "examples": ["Workload-level firewalls", "NSX, Guardicore", "Azure NSGs, AWS Security Groups"],
                "options": [
                    { "text": "Yes, granular micro-segmentation is implemented for all critical applications and workloads.", "points": 3, "risk": "Low", "recommendation": "Automate the creation and management of micro-segmentation policies as part of your application deployment pipeline (Infrastructure as Code)." },
                    { "text": "We have traditional network segmentation (VLANs) but not micro-segmentation.", "points": 1, "risk": "Medium", "recommendation": "Evolve from broad network segmentation to identity-based micro-segmentation. Traditional VLANs are static and insufficient for modern, dynamic environments." },
                    { "text": "No, our network is flat and lacks internal segmentation.", "points": 0, "risk": "Critical", "recommendation": "Implement micro-segmentation immediately, starting with your most critical assets. A flat network allows a single compromised host to threaten the entire environment." }
                ]
            },
            {
                "id": "network_2",
                "question": "Are Zero Trust Network Access (ZTNA) solutions deployed?",
                "description": "ZTNA solutions replace traditional VPNs by providing secure, identity-aware access to specific applications, rather than broad network access.",
                "category": "Remote Access",
                "examples": ["Zscaler Private Access (ZPA)", "Palo Alto Prisma Access", "Azure AD Application Proxy"],
                "options": [
                    { "text": "Yes, ZTNA is the primary method for all remote and on-premises application access.", "points": 3, "risk": "Low", "recommendation": "Ensure your ZTNA solution continuously assesses user and device posture throughout the session, not just at the initial connection." },
                    { "text": "We use ZTNA for some applications, but still rely heavily on VPNs.", "points": 1, "risk": "Medium", "recommendation": "Develop a roadmap to migrate all application access from VPN to ZTNA. This will reduce your attack surface and improve the user experience." },
                    { "text": "No, all remote access is through traditional VPNs.", "points": 0, "risk": "High", "recommendation": "Begin piloting a ZTNA solution. Traditional VPNs provide excessive trust and broad network access, which is contrary to Zero Trust principles." }
                ]
            },
            {
                "id": "network_3",
                "question": "Is Secure Access Service Edge (SASE) architecture implemented?",
                "description": "SASE converges networking (like SD-WAN) and security (like SSE) into a single, cloud-native service to provide secure access for users anywhere.",
                "category": "Network Architecture",
                "examples": ["Cato Networks", "Palo Alto Prisma SASE", "Netskope SASE"],
                "options": [
                    { "text": "Yes, we have adopted a unified SASE architecture from a single vendor.", "points": 3, "risk": "Low", "recommendation": "Leverage the single-pass architecture of SASE to streamline policy management and improve performance. Ensure you have visibility and control across both the network and security components." },
                    { "text": "We have implemented some SASE components but from multiple, un-integrated vendors.", "points": 1, "risk": "Medium", "recommendation": "Work towards a more integrated SASE architecture to reduce complexity and improve security efficacy. A fragmented approach can create policy gaps." },
                    { "text": "No, we have a traditional, perimeter-based network architecture.", "points": 0, "risk": "High", "recommendation": "Develop a strategy to move towards a SASE architecture to better support a distributed workforce and cloud applications. The traditional perimeter is no longer effective." }
                ]
            },
            {
                "id": "network_4",
                "question": "Are Security Service Edge (SSE) capabilities deployed?",
                "description": "SSE is the security side of SASE, bundling services like ZTNA, CASB, SWG, and FWaaS into a single cloud service to secure access to web, cloud, and private apps.",
                "category": "Network Security",
                "examples": ["Zscaler ZIA/ZPA", "Netskope Intelligent SSE", "Microsoft Entra Internet Access"],
                "options": [
                    { "text": "Yes, a unified SSE platform secures all user access to the internet and applications.", "points": 3, "risk": "Low", "recommendation": "Enable advanced SSE features like data protection (DLP) and threat inspection across all traffic to maximize the value of your SSE investment." },
                    { "text": "We have individual point solutions (e.g., a web proxy, a CASB) but not a unified SSE.", "points": 1, "risk": "Medium", "recommendation": "Consider consolidating your point solutions into a single SSE platform. This simplifies management, reduces costs, and provides more consistent security." },
                    { "text": "No, security is handled by on-premises appliances.", "points": 0, "risk": "Critical", "recommendation": "Adopt an SSE solution to provide consistent, high-quality security for all users, regardless of their location. On-premises appliances are not suited for a remote workforce." }
                ]
            },
            {
                "id": "network_5",
                "question": "Are all network communications encrypted end-to-end?",
                "description": "Assuming the network is hostile, all communication, both internal ('east-west') and external ('north-south'), should be encrypted to protect against eavesdropping.",
                "category": "Encryption",
                "examples": ["TLS 1.3 everywhere", "IPsec for site-to-site", "mTLS for service-to-service"],
                "options": [
                    { "text": "Yes, all traffic is encrypted end-to-end using strong, modern protocols.", "points": 2, "risk": "Low", "recommendation": "Implement automated certificate management to ensure that encryption doesn't fail due to expired certificates. Continuously scan for and disable weak protocols and ciphers." },
                    { "text": "Only external traffic is encrypted; internal traffic is largely unencrypted.", "points": 1, "risk": "Medium", "recommendation": "Enforce encryption for all internal traffic. An attacker who gains a foothold on your internal network should not be able to easily sniff credentials or sensitive data." },
                    { "text": "No, encryption is not consistently applied.", "points": 0, "risk": "High", "recommendation": "Mandate TLS for all communications as a baseline policy. This is a fundamental security control that should be universally enforced." }
                ]
            },
            {
                "id": "network_6",
                "question": "Is network traffic monitored and analyzed for threats?",
                "description": "Network Detection and Response (NDR) solutions monitor network traffic to detect suspicious patterns, anomalies, and threats that may have bypassed other security controls.",
                "category": "Threat Detection",
                "examples": ["Vectra AI", "Darktrace", "ExtraHop"],
                "options": [
                    { "text": "Yes, comprehensive NDR is in place for both on-premises and cloud networks.", "points": 3, "risk": "Low", "recommendation": "Integrate your NDR alerts with your SIEM/SOAR to correlate network-level threats with endpoint and identity data for a complete picture of an attack." },
                    { "text": "We monitor north-south traffic but have limited visibility into east-west traffic.", "points": 1, "risk": "Medium", "recommendation": "Deploy NDR sensors or leverage cloud-native traffic mirroring to gain visibility into east-west traffic. This is critical for detecting lateral movement." },
                    { "text": "No, we do not have network-level threat detection.", "points": 0, "risk": "High", "recommendation": "Implement an NDR solution. Endpoint and log-based detection can miss threats that are only visible on the network." }
                ]
            },
            {
                "id": "network_7",
                "question": "Can encrypted traffic be inspected for threats?",
                "description": "With most traffic being encrypted, the ability to decrypt and inspect that traffic for threats (without compromising privacy) is essential for security controls like SWG, DLP, and IDS/IPS.",
                "category": "Traffic Inspection",
                "examples": ["TLS/SSL Inspection", "Encrypted Traffic Analytics", "Forward Proxy Decryption"],
                "options": [
                    { "text": "Yes, we have a robust solution for inspecting encrypted traffic at scale.", "points": 2, "risk": "Low", "recommendation": "Ensure your TLS inspection solution is kept up-to-date to support the latest cryptographic standards. Maintain clear policies on what traffic is inspected vs. what is bypassed for privacy reasons (e.g., healthcare, financial)." },
                    { "text": "We have the capability but it's not widely deployed due to performance or privacy concerns.", "points": 1, "risk": "Medium", "recommendation": "Develop a phased rollout plan for TLS inspection, starting with general web traffic and excluding sensitive categories. The security risk of not inspecting traffic often outweighs the performance impact." },
                    { "text": "No, we cannot inspect encrypted traffic.", "points": 0, "risk": "Critical", "recommendation": "Implement a TLS inspection solution. Without it, you are blind to the vast majority of modern threats, which are hidden inside encrypted traffic." }
                ]
            },
            {
                "id": "network_8",
                "question": "Are software-defined perimeter (SDP) solutions deployed?",
                "description": "SDP is a practical implementation of ZTNA, creating a dynamic, identity-based perimeter around applications and hiding them from unauthorized users.",
                "category": "Network Architecture",
                "examples": ["Appgate SDP", "Cloudflare Access", "ZTNA solutions"],
                "options": [
                    { "text": "Yes, SDP is our standard for secure application access.", "points": 2, "risk": "Low", "recommendation": "Ensure your SDP implementation includes continuous authentication and device posture checks throughout the user session." },
                    { "text": "We are exploring or piloting SDP/ZTNA.", "points": 1, "risk": "Medium", "recommendation": "Accelerate your SDP/ZTNA adoption. It is a core component of a modern, Zero Trust architecture that significantly reduces the network attack surface." },
                    { "text": "No, we rely on traditional network access controls.", "points": 0, "risk": "High", "recommendation": "Transition from traditional network-level controls (like firewalls and VPNs) to an identity-based SDP model for application access." }
                ]
            },
            {
                "id": "network_9",
                "question": "Is DNS security implemented to prevent DNS-based attacks?",
                "description": "DNS security solutions can block access to malicious domains, prevent DNS hijacking, and provide visibility into threats at the earliest stage of an attack.",
                "category": "Network Security",
                "examples": ["Cisco Umbrella", "Cloudflare Gateway (DNS Filtering)", "Infoblox BloxOne Threat Defense"],
                "options": [
                    { "text": "Yes, a comprehensive DNS security solution is deployed for all users.", "points": 2, "risk": "Low", "recommendation": "Integrate your DNS security logs with your SIEM to correlate DNS-level threats with other security events." },
                    { "text": "We use basic DNS filtering but not an advanced security solution.", "points": 1, "risk": "Medium", "recommendation": "Upgrade to a dedicated DNS security solution that offers real-time threat intelligence, category-based filtering, and protection against advanced DNS attacks." },
                    { "text": "No, we do not have specific DNS security controls.", "points": 0, "risk": "High", "recommendation": "Implement a DNS security solution. DNS is a fundamental part of how the internet works and is a common vector for malware delivery and command-and-control communication." }
                ]
            },
            {
                "id": "network_10",
                "question": "Are network behavior analytics implemented?",
                "description": "Similar to UEBA, network behavior analytics establishes a baseline of normal network activity and uses machine learning to detect anomalies that could indicate a threat.",
                "category": "Threat Detection",
                "examples": ["NDR solutions with ML", "Network Traffic Analysis (NTA)", "Anomaly detection"],
                "options": [
                    { "text": "Yes, we use ML-based analytics to detect anomalous network behavior.", "points": 2, "risk": "Low", "recommendation": "Fine-tune your network behavior analytics models to reduce false positives and create high-fidelity alerts that can be used to trigger automated response actions." },
                    { "text": "We collect network flow data but do not perform behavioral analysis.", "points": 1, "risk": "Medium", "recommendation": "Implement a tool that can apply machine learning and behavioral analytics to your existing network data to uncover hidden threats." },
                    { "text": "No, we only rely on signature-based network security.", "points": 0, "risk": "High", "recommendation": "Augment your signature-based tools with network behavior analytics. Signatures are ineffective against zero-day exploits and novel attack techniques." }
                ]
            }
        ]
    },
    "Visibility": {
        "weight": 0.12, "icon": "👁️", "description": "Security monitoring, threat detection, and analytics capabilities.",
        "questions": [
             {
                "id": "visibility_1",
                "question": "Is a Security Information and Event Management (SIEM) system operational?",
                "description": "A SIEM is the cornerstone of security visibility, aggregating, correlating, and analyzing log data from across the enterprise to detect threats and facilitate investigation.",
                "category": "Security Monitoring",
                "examples": ["Microsoft Sentinel", "Splunk", "QRadar"],
                "options": [
                    { "text": "Yes, a cloud-native SIEM is deployed with comprehensive log source coverage.", "points": 2, "risk": "Low", "recommendation": "Focus on developing advanced, custom detection rules and analytics that are specific to your environment and threat model." },
                    { "text": "A SIEM is deployed, but it has limited log sources or is difficult to use.", "points": 1, "risk": "Medium", "recommendation": "Prioritize onboarding all critical log sources (e.g., identity provider, EDR, firewalls, cloud platforms) into your SIEM to improve visibility." },
                    { "text": "No, we do not have a SIEM.", "points": 0, "risk": "Critical", "recommendation": "Implement a SIEM solution immediately. Without centralized logging and correlation, effective threat detection and response is impossible." }
                ]
            },
            {
                "id": "visibility_2",
                "question": "Are Security Orchestration, Automation and Response (SOAR) capabilities implemented?",
                "description": "SOAR platforms automate and orchestrate security workflows, enabling faster and more consistent incident response by integrating various security tools.",
                "category": "Automation",
                "examples": ["Sentinel SOAR", "Splunk SOAR", "Palo Alto Cortex XSOAR"],
                "options": [
                    { "text": "Yes, SOAR is used to automate our key incident response playbooks.", "points": 3, "risk": "Low", "recommendation": "Continuously expand your library of SOAR playbooks to cover a wider range of security incidents. Measure and work to improve key metrics like Mean Time to Respond (MTTR)." },
                    { "text": "We have some automation scripts but not a dedicated SOAR platform.", "points": 1, "risk": "Medium", "recommendation": "Adopt a SOAR platform to move from simple scripting to scalable, manageable automation. SOAR provides better integration, case management, and metrics." },
                    { "text": "No, our incident response process is entirely manual.", "points": 0, "risk": "High", "recommendation": "Implement a SOAR solution. Manual incident response is too slow and error-prone to keep up with the speed and scale of modern attacks." }
                ]
            },
            {
                "id": "visibility_3",
                "question": "Is User and Entity Behavior Analytics (UEBA) implemented?",
                "description": "UEBA uses machine learning to baseline normal user and device behavior and detect anomalies that could indicate insider threats or compromised accounts.",
                "category": "Threat Detection",
                "examples": ["Microsoft Sentinel UEBA", "Exabeam", "Splunk UBA"],
                "options": [
                    { "text": "Yes, UEBA is fully integrated and used for proactive threat detection.", "points": 3, "risk": "Low", "recommendation": "Correlate UEBA alerts with other security signals (e.g., from EDR, DLP) to get a more complete picture of a potential incident and reduce false positives." },
                    { "text": "UEBA is deployed but is noisy or primarily used for forensic investigation.", "points": 1, "risk": "Medium", "recommendation": "Invest time in tuning your UEBA models to increase the fidelity of the alerts. Focus on a few high-value use cases first, such as compromised account detection." },
                    { "text": "No, we do not use behavioral analytics.", "points": 0, "risk": "High", "recommendation": "Implement a UEBA solution. Signature-based detections will miss sophisticated attacks and insider threats that behavioral analytics can identify." }
                ]
            },
            {
                "id": "visibility_4",
                "question": "Are behavioral baselines established for users and entities?",
                "description": "A key part of UEBA is establishing a clear, dynamic baseline of what constitutes 'normal' activity for each user and device, so that deviations can be accurately identified.",
                "category": "Threat Detection",
                "examples": ["Normal work hours", "Typical applications used", "Common geographic locations"],
                "options": [
                    { "text": "Yes, dynamic behavioral baselines are established and continuously updated.", "points": 2, "risk": "Low", "recommendation": "Enrich your behavioral baselines with HR data (e.g., roles, departments) to create peer group analytics, which can more accurately identify anomalous behavior." },
                    { "text": "Baselines are static or not well-defined.", "points": 1, "risk": "Medium", "recommendation": "Leverage the machine learning capabilities of your SIEM/UEBA platform to automatically generate and maintain dynamic baselines." },
                    { "text": "No, we do not have behavioral baselines.", "points": 0, "risk": "High", "recommendation": "You cannot detect abnormal behavior if you have not defined what is normal. Establishing baselines is a critical prerequisite for effective UEBA." }
                ]
            },
            {
                "id": "visibility_5",
                "question": "Are threat intelligence feeds integrated?",
                "description": "Integrating threat intelligence provides context on the latest indicators of compromise (IoCs), attacker tactics, and vulnerabilities, enhancing your ability to detect and respond to threats.",
                "category": "Threat Intelligence",
                "examples": ["MISP", "ThreatConnect", "Commercial TI feeds (Mandiant, CrowdStrike)"],
                "options": [
                    { "text": "Yes, multiple threat intelligence feeds are integrated and operationalized in our SIEM.", "points": 2, "risk": "Low", "recommendation": "Move beyond just using IoCs and start operationalizing tactical and strategic threat intelligence to inform your defensive priorities and proactive threat hunting." },
                    { "text": "We subscribe to feeds, but they are not well-integrated into our daily operations.", "points": 1, "risk": "Medium", "recommendation": "Automate the ingestion and correlation of threat intelligence within your SIEM. Use the intelligence to enrich alerts, prioritize incidents, and drive detection rules." },
                    { "text": "No, we do not use external threat intelligence.", "points": 0, "risk": "High", "recommendation": "Subscribe to and integrate threat intelligence feeds. Without them, you are operating in a vacuum and will be blind to emerging threats." }
                ]
            },
            {
                "id": "visibility_6",
                "question": "Are proactive threat hunting activities conducted?",
                "description": "Threat hunting is the practice of proactively searching for threats that have evaded your automated defenses, based on hypotheses and threat intelligence.",
                "category": "Threat Hunting",
                "examples": ["Hypothesis-driven hunts", "Searching for TTPs in logs", "Using ML to find outliers"],
                "options": [
                    { "text": "Yes, we have a dedicated team or process for regular, proactive threat hunting.", "points": 3, "risk": "Low", "recommendation": "Use the findings from your threat hunts to create new automated detection rules. The goal of hunting is to continually improve your automated defenses." },
                    { "text": "Threat hunting is performed on an ad-hoc basis, usually after a major incident.", "points": 1, "risk": "Medium", "recommendation": "Formalize your threat hunting activities. Schedule regular hunts, develop hypotheses based on threat intelligence, and document your procedures and findings." },
                    { "text": "No, we only react to automated alerts.", "points": 0, "risk": "High", "recommendation": "Establish a threat hunting program. Assume that your defenses have been breached and proactively search for evidence of compromise. This is a critical shift from a reactive to a proactive security posture." }
                ]
            },
            {
                "id": "visibility_7",
                "question": "Is real-time security monitoring and alerting implemented?",
                "description": "Effective security operations require the ability to monitor security events in real-time and generate high-fidelity alerts for immediate investigation.",
                "category": "Security Monitoring",
                "examples": ["24/7 SOC monitoring", "Real-time SIEM dashboards", "Automated alert triage"],
                "options": [
                    { "text": "Yes, we have 24/7 real-time monitoring with automated alert triage.", "points": 2, "risk": "Low", "recommendation": "Continuously work on alert tuning and enrichment to reduce analyst fatigue and ensure that the SOC is focused on the most critical threats." },
                    { "text": "Monitoring is in place, but alerts are often delayed or have a high false positive rate.", "points": 1, "risk": "Medium", "recommendation": "Invest significant effort in alert tuning. A noisy SIEM is an ineffective SIEM. Focus on creating a smaller number of high-fidelity alerts." },
                    { "text": "No, monitoring is periodic or non-existent.", "points": 0, "risk": "Critical", "recommendation": "Implement real-time monitoring and alerting. You cannot respond to threats in a timely manner if you are not aware of them as they happen." }
                ]
            },
            {
                "id": "visibility_8",
                "question": "What percentage of systems send logs to your SIEM?",
                "description": "Visibility is only as good as your data. Comprehensive log collection from all relevant sources is essential for effective threat detection and investigation.",
                "category": "Log Management",
                "examples": ["Endpoints", "Servers", "Network devices", "Cloud services", "Applications"],
                "options": [
                    { "text": "90-100% of all relevant systems and applications.", "points": 3, "risk": "Low", "recommendation": "Develop a process to ensure that all new systems and applications are automatically onboarded into the SIEM as part of the deployment process." },
                    { "text": "50-89% - We have good coverage on critical systems but there are gaps.", "points": 1, "risk": "Medium", "recommendation": "Identify and prioritize the onboarding of your remaining log sources. Gaps in logging create blind spots that attackers can exploit." },
                    { "text": "Less than 50% of systems.", "points": 0, "risk": "High", "recommendation": "Launch a project to significantly increase your log collection coverage. Incomplete data makes threat detection and investigation extremely difficult and often impossible." }
                ]
            }
        ]
    },
     "Application": {
        "weight": 0.12, "icon": "💻", "description": "Application security, development practices, and workload protection.",
        "questions": [
            {
                "id": "app_1",
                "question": "Do you maintain complete application inventory?",
                "description": "A comprehensive inventory of all applications (internal, third-party, SaaS) is fundamental to managing application security and risk.",
                "category": "Asset Management",
                "examples": ["Application portfolio management", "CMDB with application data", "Automated application discovery"],
                "options": [
                    { "text": "Yes, a real-time, comprehensive inventory of all applications is maintained.", "points": 2, "risk": "Low", "recommendation": "Integrate your application inventory with your vulnerability management and security testing tools to automate risk assessment." },
                    { "text": "We have an inventory, but it's manually updated or incomplete.", "points": 1, "risk": "Medium", "recommendation": "Implement an automated application discovery solution. Manual inventories are insufficient for modern, dynamic application environments." },
                    { "text": "No, we do not have a centralized application inventory.", "points": 0, "risk": "High", "recommendation": "Establish a comprehensive application inventory. You cannot secure applications that you do not know you have." }
                ]
            },
            {
                "id": "app_2",
                "question": "Are regular security assessments conducted on applications?",
                "description": "Regularly assessing applications for vulnerabilities using a combination of static (SAST), dynamic (DAST), and interactive (IAST) testing is crucial for identifying and remediating flaws.",
                "category": "Application Security",
                "examples": ["SAST (e.g., Veracode, Checkmarx)", "DAST (e.g., Invicti, Burp Suite)", "Penetration Testing"],
                "options": [
                    { "text": "Yes, automated security testing is integrated into our CI/CD pipeline for all applications.", "points": 3, "risk": "Low", "recommendation": "Incorporate Software Composition Analysis (SCA) to identify and manage vulnerabilities in open-source components used by your applications." },
                    { "text": "Assessments are performed periodically or only for high-risk applications.", "points": 1, "risk": "Medium", "recommendation": "Move from periodic assessments to continuous, automated security testing integrated into the development process. This 'shift-left' approach finds and fixes vulnerabilities earlier and cheaper." },
                    { "text": "No, applications are not regularly assessed for security vulnerabilities.", "points": 0, "risk": "Critical", "recommendation": "Implement a program for regular application security assessments immediately, starting with your most critical, internet-facing applications." }
                ]
            },
            {
                "id": "app_3",
                "question": "Are API security gateways implemented?",
                "description": "APIs are a primary target for attackers. An API security gateway provides a dedicated control point for enforcing authentication, authorization, rate limiting, and threat protection for your APIs.",
                "category": "API Security",
                "examples": ["Azure API Management", "MuleSoft Anypoint", "Kong API Gateway"],
                "options": [
                    { "text": "Yes, all APIs are protected by a gateway with strong security policies.", "points": 3, "risk": "Low", "recommendation": "Implement advanced API threat protection that can detect and block attacks specific to APIs, such as those in the OWASP API Security Top 10." },
                    { "text": "We have some API gateways, but not all APIs are protected.", "points": 1, "risk": "Medium", "recommendation": "Discover and inventory all of your APIs and bring them under the protection of a centralized API security gateway." },
                    { "text": "No, our APIs are exposed directly or with minimal protection.", "points": 0, "risk": "High", "recommendation": "Deploy an API security gateway. Unprotected APIs are a major source of data breaches and a significant blind spot for many organizations." }
                ]
            },
            {
                "id": "app_4",
                "question": "Is DevSecOps integrated into development lifecycles?",
                "description": "DevSecOps is the practice of integrating security activities, tools, and processes into the development and operations lifecycle, making security a shared responsibility.",
                "category": "Secure Development",
                "examples": ["Security testing in CI/CD", "Infrastructure as Code (IaC) scanning", "Threat modeling in design phase"],
                "options": [
                    { "text": "Yes, security is fully integrated and automated throughout our DevOps lifecycle.", "points": 3, "risk": "Low", "recommendation": "Focus on providing developers with fast, actionable feedback from security tools directly within their existing workflows to minimize friction." },
                    { "text": "We are beginning to adopt some DevSecOps practices.", "points": 1, "risk": "Medium", "recommendation": "Expand your DevSecOps program by automating more security controls within the CI/CD pipeline and providing developers with security training and tools." },
                    { "text": "No, security is a separate, final step before deployment.", "points": 0, "risk": "Critical", "recommendation": "Shift security left by integrating it into the development process. A 'bolt-on' approach to security is inefficient, ineffective, and leads to conflict between development and security teams." }
                ]
            },
            {
                "id": "app_5",
                "question": "Are Cloud Workload Protection Platforms (CWPP) deployed?",
                "description": "CWPP solutions provide security for modern workloads (servers, containers, serverless) across multi-cloud and hybrid environments, offering vulnerability management, compliance, and threat detection.",
                "category": "Cloud Security",
                "examples": ["Microsoft Defender for Cloud", "Palo Alto Prisma Cloud", "Wiz"],
                "options": [
                    { "text": "Yes, a CWPP provides unified security across all our cloud workloads.", "points": 2, "risk": "Low", "recommendation": "Leverage the Cloud Security Posture Management (CSPM) capabilities of your CWPP to identify and remediate misconfigurations in your cloud environment." },
                    { "text": "We use native cloud provider security tools but not a dedicated CWPP.", "points": 1, "risk": "Medium", "recommendation": "Consider a dedicated CWPP, especially if you operate in a multi-cloud environment. A CWPP provides a single, consistent view of security across all your cloud providers." },
                    { "text": "No, we do not have specific security for cloud workloads.", "points": 0, "risk": "High", "recommendation": "Deploy a CWPP to gain visibility and control over the security of your cloud workloads. Traditional security tools are not sufficient for the dynamic nature of the cloud." }
                ]
            },
            {
                "id": "app_6",
                "question": "Are container security solutions implemented?",
                "description": "Container security involves securing the entire lifecycle of containers, from the build pipeline (image scanning) to runtime (threat detection and response).",
                "category": "Container Security",
                "examples": ["Aqua Security", "Sysdig", "Prisma Cloud (Twistlock)"],
                "options": [
                    { "text": "Yes, we have a comprehensive solution for container image scanning and runtime protection.", "points": 3, "risk": "Low", "recommendation": "Implement policies to prevent vulnerable or non-compliant container images from being deployed into production." },
                    { "text": "We perform image scanning but have no runtime protection for containers.", "points": 1, "risk": "Medium", "recommendation": "Implement runtime security for your containers. A clean image can still be compromised at runtime, and you need the visibility to detect and respond to that." },
                    { "text": "No, we do not have specific security controls for containers.", "points": 0, "risk": "High", "recommendation": "Deploy a container security solution. The ephemeral and complex nature of containers requires specialized security tools." }
                ]
            },
            {
                "id": "app_7",
                "question": "Is Runtime Application Self-Protection (RASP) implemented?",
                "description": "RASP is a technology that is built into an application to monitor for and block attacks in real-time as they happen, providing more accurate protection than external devices like WAFs.",
                "category": "Application Security",
                "examples": ["Open-source RASP libraries", "Commercial RASP solutions", "Integrated in APM"],
                "options": [
                    { "text": "Yes, RASP is implemented in our critical applications.", "points": 2, "risk": "Low", "recommendation": "Ensure that your RASP solution provides detailed telemetry back to your SIEM/SOC to provide context for security events." },
                    { "text": "We are considering or piloting RASP.", "points": 1, "risk": "Medium", "recommendation": "Prioritize the deployment of RASP for your most critical, internet-facing applications, as it provides an excellent layer of defense against application-level attacks." },
                    { "text": "No, we do not use RASP.", "points": 0, "risk": "High", "recommendation": "Evaluate RASP as an additional layer of application security. It can be particularly effective at stopping zero-day exploits that a WAF might miss." }
                ]
            },
            {
                "id": "app_8",
                "question": "Are Web Application Firewalls (WAF) protecting applications?",
                "description": "A WAF sits in front of web applications to inspect traffic and filter out malicious requests, protecting against common attacks like SQL injection, cross-site scripting (XSS), and others.",
                "category": "Application Security",
                "examples": ["Cloudflare WAF", "Azure Application Gateway WAF", "AWS WAF"],
                "options": [
                    { "text": "Yes, all web applications are protected by a WAF with tuned, application-specific rules.", "points": 2, "risk": "Low", "recommendation": "Move your WAF from a simple blocking mode to one that is integrated with threat intelligence and can protect against bots and other automated attacks." },
                    { "text": "We have a WAF, but it is in 'monitor-only' mode or uses generic rules.", "points": 1, "risk": "Medium", "recommendation": "Tune your WAF rules and switch it to blocking mode. A WAF that isn't blocking attacks is just an expensive logging tool." },
                    { "text": "No, our web applications are not protected by a WAF.", "points": 0, "risk": "Critical", "recommendation": "Deploy a WAF for all of your internet-facing web applications immediately. It is a foundational control for application security." }
                ]
            }
        ]
    },
    "SecurityOps": {
        "weight": 0.08, "icon": "🛡️", "description": "Security operations center maturity and operational effectiveness.",
        "questions": [
             {
                "id": "secops_1",
                "question": "Is a 24x7 Security Operations Center (SOC) operational?",
                "description": "A 24x7 SOC provides continuous monitoring, detection, and response capabilities, which is critical as attacks can happen at any time.",
                "category": "SOC Operations",
                "examples": ["In-house 24x7 SOC", "Managed SOC (MSSP)", "Hybrid SOC model"],
                "options": [
                    { "text": "Yes, we have a 24x7 SOC with dedicated analysts.", "points": 2, "risk": "Low", "recommendation": "Focus on improving SOC maturity by investing in advanced training for analysts, developing mature processes, and measuring performance against key metrics (MTTD, MTTR)." },
                    { "text": "Our SOC operates during business hours only.", "points": 1, "risk": "Medium", "recommendation": "Develop a plan for after-hours coverage, either through on-call rotations or by partnering with a managed security service provider (MSSP). A significant number of attacks occur outside of normal business hours." },
                    { "text": "No, we do not have a formal SOC.", "points": 0, "risk": "Critical", "recommendation": "Establish a SOC function. Whether in-house, outsourced, or hybrid, a dedicated team responsible for security operations is essential for modern cyber defense." }
                ]
            },
            {
                "id": "secops_2",
                "question": "Are SOC processes documented and standardized?",
                "description": "Well-defined and documented processes (e.g., playbooks, standard operating procedures) ensure that security incidents are handled in a consistent, efficient, and effective manner.",
                "category": "Process Maturity",
                "examples": ["Incident response playbooks", "Analyst triage procedures", "Escalation matrices"],
                "options": [
                    { "text": "Yes, all our SOC processes are documented, standardized, and regularly reviewed.", "points": 2, "risk": "Low", "recommendation": "Integrate your documented playbooks into your SOAR platform to automate repetitive tasks and ensure that processes are followed consistently." },
                    { "text": "Some processes are documented, but much relies on institutional knowledge.", "points": 1, "risk": "Medium", "recommendation": "Prioritize the documentation of your key incident response processes. This improves consistency, reduces reliance on individual analysts, and simplifies training for new team members." },
                    { "text": "No, our processes are ad-hoc and informal.", "points": 0, "risk": "High", "recommendation": "Begin documenting your security operations processes immediately. Start with a high-level incident response plan and then develop more detailed playbooks for common incident types." }
                ]
            },
            {
                "id": "secops_3",
                "question": "Is threat detection automated with low false positives?",
                "description": "Effective threat detection relies on well-tuned, automated rules and analytics that can accurately identify malicious activity without overwhelming analysts with false positives.",
                "category": "Threat Detection",
                "examples": ["High-fidelity SIEM alerts", "ML-based detections", "Continuous alert tuning"],
                "options": [
                    { "text": "Yes, our detections are highly automated and have a low false positive rate.", "points": 3, "risk": "Low", "recommendation": "Develop a formal process for creating, testing, and deploying new detection rules based on threat intelligence and the findings from threat hunts." },
                    { "text": "We have automated detection, but it generates a high volume of false positives.", "points": 1, "risk": "Medium", "recommendation": "Dedicate significant time and resources to alert tuning. A noisy SIEM leads to analyst burnout and missed threats. Focus on quality over quantity of alerts." },
                    { "text": "No, threat detection is largely manual or ineffective.", "points": 0, "risk": "High", "recommendation": "Implement and tune a set of baseline detection rules in your SIEM. Focus on high-impact scenarios like ransomware, compromised credentials, and data exfiltration." }
                ]
            },
            {
                "id": "secops_4",
                "question": "Are incident response times measured and optimized?",
                "description": "Measuring and working to improve key performance indicators (KPIs) like Mean Time to Detect (MTTD) and Mean Time to Respond (MTTR) is a hallmark of a mature security operations program.",
                "category": "Performance Metrics",
                "examples": ["MTTD/MTTR tracking", "SOC performance dashboards", "Post-incident reviews"],
                "options": [
                    { "text": "Yes, we continuously measure and work to improve our response time KPIs.", "points": 2, "risk": "Low", "recommendation": "Use your performance metrics to justify investments in automation and other technologies that can help to further drive down your MTTD and MTTR." },
                    { "text": "We have a general sense of our response times but do not formally measure them.", "points": 1, "risk": "Medium", "recommendation": "Begin formally tracking MTTD and MTTR for all security incidents. This will provide a baseline from which you can measure improvement over time." },
                    { "text": "No, we do not measure our incident response performance.", "points": 0, "risk": "High", "recommendation": "Start measuring your incident response times. As the saying goes, 'you can't improve what you don't measure'. This is a critical step in maturing your SOC." }
                ]
            },
            {
                "id": "secops_5",
                "question": "Is security orchestration implemented across tools?",
                "description": "Orchestration involves connecting disparate security tools into a cohesive workflow, allowing for automated, multi-tool response actions (e.g., correlate EDR alert, query threat intel, block hash on firewall).",
                "category": "Automation",
                "examples": ["SOAR platforms", "Automated response playbooks", "API-level tool integration"],
                "options": [
                    { "text": "Yes, our SOAR platform orchestrates actions across our entire security stack.", "points": 3, "risk": "Low", "recommendation": "Expand your orchestration use cases to include proactive tasks, such as automated vulnerability enrichment or proactive device isolation based on threat intelligence." },
                    { "text": "We have some point-to-point integrations but no central orchestration.", "points": 1, "risk": "Medium", "recommendation": "Adopt a SOAR platform to serve as the central hub for security orchestration. This is more scalable and manageable than custom, point-to-point scripts." },
                    { "text": "No, our tools operate in silos and all actions are manual.", "points": 0, "risk": "High", "recommendation": "Invest in security orchestration. The 'swivel-chair' interface, where analysts manually pivot between different tools, is slow, inefficient, and error-prone." }
                ]
            },
            {
                "id": "secops_6",
                "question": "Are threat intelligence capabilities integrated?",
                "description": "A mature SOC doesn't just consume threat intelligence; it has a dedicated capability to manage, analyze, and operationalize intelligence to improve defenses and inform operations.",
                "category": "Threat Intelligence",
                "examples": ["Threat intelligence platform (TIP)", "Dedicated threat intel analyst", "Internal intelligence generation"],
                "options": [
                    { "text": "Yes, we have a mature threat intelligence program that informs all aspects of security.", "points": 2, "risk": "Low", "recommendation": "Develop the capability to generate your own internal threat intelligence based on the specific threats and incidents you observe in your environment." },
                    { "text": "We consume threat intelligence feeds but lack a formal analysis capability.", "points": 1, "risk": "Medium", "recommendation": "Develop a formal threat intelligence function, even if it's just a part-time role for a senior analyst. The goal is to move from simply consuming data to producing actionable intelligence." },
                    { "text": "No, we do not have a threat intelligence capability.", "points": 0, "risk": "High", "recommendation": "Establish a threat intelligence program. At a minimum, subscribe to high-quality feeds and integrate them into your SIEM. This provides critical context for your security operations." }
                ]
            },
            {
                "id": "secops_7",
                "question": "Are security metrics reported to leadership regularly?",
                "description": "Regularly reporting on key security metrics to business and IT leadership is crucial for demonstrating the value of the security program, justifying investments, and aligning security with business objectives.",
                "category": "Reporting",
                "examples": ["Executive security dashboard", "Quarterly business reviews", "Risk metrics and KPIs"],
                "options": [
                    { "text": "Yes, we provide regular, data-driven reports to leadership that are tied to business risk.", "points": 2, "risk": "Low", "recommendation": "Work to make your reporting more predictive. Instead of just reporting on past events, use your data to forecast future risks and trends." },
                    { "text": "We provide technical, operational reports but not business-focused metrics.", "points": 1, "risk": "Medium", "recommendation": "Translate your operational security metrics into the language of business risk. Leadership wants to understand how security is impacting the bottom line, not the number of alerts your SIEM generated." },
                    { "text": "No, we do not have a formal process for reporting to leadership.", "points": 0, "risk": "High", "recommendation": "Develop a set of key security metrics and begin reporting them to leadership on a regular basis. This visibility is essential for getting the support and resources your program needs." }
                ]
            },
            {
                "id": "secops_8",
                "question": "Is proactive threat hunting conducted regularly?",
                "description": "A mature SOC includes a proactive threat hunting function that actively searches for adversaries in the environment, rather than just waiting for alerts.",
                "category": "Threat Hunting",
                "examples": ["Hypothesis-driven hunting", "Using MITRE ATT&CK for hunt scenarios", "Dedicated hunt team"],
                "options": [
                    { "text": "Yes, we have a structured, intelligence-driven threat hunting program.", "points": 2, "risk": "Low", "recommendation": "Formalize the feedback loop where the findings from your threat hunts are used to create new, automated detection rules in your SIEM." },
                    { "text": "Hunting is done on an ad-hoc basis with no formal process.", "points": 1, "risk": "Medium", "recommendation": "Establish a formal threat hunting program. This includes scheduling regular hunts, developing hypotheses based on threat intelligence, and documenting your procedures and findings." },
                    { "text": "No, we are entirely reactive to alerts.", "points": 0, "risk": "Critical", "recommendation": "Start threat hunting. Assume you are compromised and proactively search for evidence. This shift in mindset from reactive to proactive is a critical step in maturing your security operations." }
                ]
            }
        ]
    },
    "Automation": {
        "weight": 0.06, "icon": "🤖", "description": "Security automation, orchestration, and process optimization.",
        "questions": [
            {
                "id": "auto_1",
                "question": "Are security policies automatically enforced?",
                "description": "Automated policy enforcement, whether for device compliance, access control, or cloud configuration, ensures that security standards are consistently applied without manual intervention.",
                "category": "Policy Automation",
                "examples": ["Conditional Access policies", "Automated compliance remediation", "Policy as Code"],
                "options": [
                    { "text": "Yes, most security policies are automatically enforced and audited.", "points": 2, "risk": "Low", "recommendation": "Adopt a 'Policy as Code' approach to manage and version your security policies, integrating them into your DevOps and IT processes." },
                    { "text": "Some policies are automated, but many rely on manual enforcement.", "points": 1, "risk": "Medium", "recommendation": "Identify your most critical, manually-enforced security policies and prioritize their automation. Manual processes are error-prone and not scalable." },
                    { "text": "No, policy enforcement is an entirely manual process.", "points": 0, "risk": "High", "recommendation": "Begin automating the enforcement of your security policies. Start with foundational controls like device compliance and access policies." }
                ]
            },
            {
                "id": "auto_2",
                "question": "Are incident response processes automated?",
                "description": "Automating incident response workflows (e.g., triage, enrichment, containment) using SOAR dramatically reduces response times and frees up analysts for more strategic tasks.",
                "category": "Incident Response",
                "examples": ["SOAR playbooks", "Automated alert enrichment", "Automated containment actions"],
                "options": [
                    { "text": "Yes, our key incident response playbooks are fully automated.", "points": 3, "risk": "Low", "recommendation": "Develop more advanced, fully-automated response playbooks that can handle an entire incident from detection to closure without human intervention for certain classes of alerts." },
                    { "text": "We have some automation for specific tasks, but not end-to-end process automation.", "points": 1, "risk": "Medium", "recommendation": "Stitch your individual automation tasks together into end-to-end automated playbooks using a SOAR platform. This will provide a much greater improvement in efficiency." },
                    { "text": "No, our incident response process is entirely manual.", "points": 0, "risk": "Critical", "recommendation": "Automate your incident response. The speed and scale of modern attacks have made manual response obsolete. Start by automating simple, repetitive tasks like indicator lookups and alert triage." }
                ]
            },
            {
                "id": "auto_3",
                "question": "Are security remediation actions automated?",
                "description": "Automated remediation can involve actions like patching vulnerable systems, isolating compromised devices, or revoking user access, all triggered automatically in response to a security event.",
                "category": "Remediation",
                "examples": ["Automated vulnerability patching", "Automatic device quarantine", "Automated user session revocation"],
                "options": [
                    { "text": "Yes, many remediation actions are fully automated based on predefined rules.", "points": 3, "risk": "Low", "recommendation": "Implement a 'gated' automation model, where high-confidence remediation actions are fully automated, but lower-confidence actions require analyst approval before executing." },
                    { "text": "We can trigger remediation actions manually from a central console.", "points": 1, "risk": "Medium", "recommendation": "Move from manually-triggered remediation to fully automated remediation. Every minute of delay in remediation gives an attacker more time to achieve their objectives." },
                    { "text": "No, all remediation is performed manually by separate IT teams.", "points": 0, "risk": "High", "recommendation": "Integrate your security and IT tools to enable automated remediation. The hand-off between security and IT is often a major bottleneck in the remediation process." }
                ]
            },
            {
                "id": "auto_4",
                "question": "Are compliance checks and reporting automated?",
                "description": "Automating compliance checks against standards like CIS, NIST, or PCI-DSS and generating reports automatically saves a significant amount of manual effort and provides a continuous view of compliance.",
                "category": "Compliance",
                "examples": ["Cloud Security Posture Management (CSPM)", "Automated audit evidence collection", "Real-time compliance dashboards"],
                "options": [
                    { "text": "Yes, compliance is continuously monitored and reported on automatically.", "points": 2, "risk": "Low", "recommendation": "Implement automated remediation for common compliance violations to move towards a state of continuous compliance." },
                    { "text": "Checks are automated, but reporting is a manual process.", "points": 1, "risk": "Medium", "recommendation": "Automate the generation of compliance reports and dashboards. This provides real-time visibility and frees up your team from the manual, repetitive work of preparing for audits." },
                    { "text": "No, compliance checking is a manual, point-in-time process.", "points": 0, "risk": "High", "recommendation": "Implement a tool to automate compliance checking. Manual, periodic audits are expensive, time-consuming, and provide a view of compliance that is instantly out of date." }
                ]
            },
            {
                "id": "auto_5",
                "question": "Are security tools integrated for data sharing?",
                "description": "Effective automation relies on the ability of your security tools to share data and context with each other through APIs, creating a security ecosystem that is more than the sum of its parts.",
                "category": "Integration",
                "examples": ["SIEM-EDR integration", "Threat Intel Platform (TIP) integration", "Open APIs (e.g., TAXII/STIX)"],
                "options": [
                    { "text": "Yes, our security tools are tightly integrated and share data in real-time.", "points": 2, "risk": "Low", "recommendation": "Adopt a standardized data format (like the Open Cybersecurity Schema Framework - OCSF) to simplify tool integration and data analysis." },
                    { "text": "We have a few point-to-point integrations, but it's not a cohesive system.", "points": 1, "risk": "Medium", "recommendation": "Use your SIEM or a SOAR platform as a central hub to integrate your security tools, rather than building and maintaining a complex web of point-to-point integrations." },
                    { "text": "No, our security tools operate in silos.", "points": 0, "risk": "High", "recommendation": "Prioritize the integration of your security tools. Siloed tools lead to missed detections, slow response, and an incomplete picture of your security posture." }
                ]
            },
            {
                "id": "auto_6",
                "question": "Are security playbooks automated across tools?",
                "description": "This goes beyond simple automation to orchestrating a complex series of actions across multiple tools to respond to a specific type of incident, as defined in a playbook.",
                "category": "Orchestration",
                "examples": ["Phishing response playbook", "Ransomware containment playbook", "Compromised credential playbook"],
                "options": [
                    { "text": "Yes, we have a library of automated playbooks for our most common incident types.", "points": 3, "risk": "Low", "recommendation": "Regularly test and update your automated playbooks to ensure they remain effective as your tools and environment change. Conduct tabletop exercises to validate them." },
                    { "text": "We have documented playbooks but their execution is manual.", "points": 1, "risk": "Medium", "recommendation": "Translate your manual playbooks into automated workflows within your SOAR platform. This is the key to achieving speed and consistency in your incident response." },
                    { "text": "No, we do not have formal playbooks.", "points": 0, "risk": "High", "recommendation": "Develop and document incident response playbooks for your most common and high-impact scenarios. You cannot automate a process that you have not first defined." }
                ]
            },
            {
                "id": "auto_7",
                "question": "Are access decisions automated based on risk?",
                "description": "This is the core of adaptive access control: automatically adjusting a user's access rights in real-time based on a dynamic assessment of risk (e.g., from user behavior, device posture, threat intelligence).",
                "category": "Adaptive Access",
                "examples": ["Step-up authentication for risky actions", "Blocking access from a compromised device", "Limiting session for anomalous behavior"],
                "options": [
                    { "text": "Yes, access is continuously and automatically adapted based on real-time risk.", "points": 3, "risk": "Low", "recommendation": "Expand the range of signals used in your risk calculation to create a more accurate and comprehensive view of risk. Incorporate signals from application security and data protection tools." },
                    { "text": "Risk is assessed, but any changes to access are made manually.", "points": 1, "risk": "Medium", "recommendation": "Automate your risk-based access policies. Manual intervention is too slow to be effective against real-time threats." },
                    { "text": "No, access is static and does not consider risk.", "points": 0, "risk": "Critical", "recommendation": "Implement an adaptive access control system. Static, role-based access is insufficient for a Zero Trust security model." }
                ]
            },
            {
                "id": "auto_8",
                "question": "Is continuous trust validation automated?",
                "description": "In Zero Trust, trust is never permanent. Continuous trust validation is the process of automatically and repeatedly re-evaluating the user and device to ensure they still meet the requirements for access.",
                "category": "Zero Trust Principles",
                "examples": ["Continuous authentication", "Session monitoring for risk changes", "Real-time device posture checks"],
                "options": [
                    { "text": "Yes, trust is continuously validated throughout the user session.", "points": 2, "risk": "Low", "recommendation": "Implement session hijacking detection capabilities to ensure that a session that started as trusted has not been taken over by an attacker." },
                    { "text": "Trust is validated at the start of the session, but not continuously.", "points": 1, "risk": "Medium", "recommendation": "Move from a one-time trust validation at login to a continuous validation model. The security posture of a user or device can change at any moment." },
                    { "text": "No, once a user is authenticated, they are trusted for the duration of their session.", "points": 0, "risk": "High", "recommendation": "Adopt the principle of 'never trust, always verify'. Implement a system that can continuously validate trust and terminate a session if the risk level changes." }
                ]
            }
        ]
    },
     "TPRM": {
        "weight": 0.04, "icon": "🤝", "description": "Third-party risk management and vendor security oversight.",
        "questions": [
            {
                "id": "tprm_1",
                "question": "Is formal third-party risk assessment conducted?",
                "description": "A formal process for assessing the security posture of all third-party vendors before they are onboarded is critical to managing supply chain risk.",
                "category": "Vendor Assessment",
                "examples": ["Security questionnaires (e.g., SIG, CAIQ)", "Third-party audits (e.g., SOC 2)", "Security ratings services"],
                "options": [
                    { "text": "Yes, a comprehensive risk assessment is required for all new vendors.", "points": 2, "risk": "Low", "recommendation": "Tier your vendors based on the level of risk they pose (e.g., access to data) and tailor the depth of your security assessment accordingly." },
                    { "text": "Assessments are informal or only conducted for some vendors.", "points": 1, "risk": "Medium", "recommendation": "Formalize and standardize your third-party risk assessment process. Ensure that it is applied consistently to all new vendors." },
                    { "text": "No, we do not formally assess the security of our vendors.", "points": 0, "risk": "Critical", "recommendation": "Implement a third-party risk management (TPRM) program immediately. Your security is only as strong as your weakest link, and that link is often a third-party vendor." }
                ]
            },
            {
                "id": "tprm_2",
                "question": "Is continuous monitoring of vendor security implemented?",
                "description": "A vendor's security posture can change over time. Continuous monitoring provides ongoing visibility into your vendors' security performance, rather than relying on point-in-time assessments.",
                "category": "Continuous Monitoring",
                "examples": ["SecurityScorecard, BitSight", "Monitoring for public breaches", "Automated questionnaire updates"],
                "options": [
                    { "text": "Yes, we use automated tools for continuous monitoring of our critical vendors.", "points": 3, "risk": "Low", "recommendation": "Integrate the data from your continuous monitoring tools into your overall risk management process. Use significant drops in a vendor's security score to trigger a more in-depth review." },
                    { "text": "We re-assess vendors periodically (e.g., annually).", "points": 1, "risk": "Medium", "recommendation": "Supplement your periodic re-assessments with a continuous monitoring solution. Annual assessments are not sufficient to keep up with the changing risk landscape." },
                    { "text": "No, we only assess vendors at onboarding.", "points": 0, "risk": "High", "recommendation": "Implement a continuous monitoring capability for your third-party vendors. A 'one and done' assessment at onboarding provides a false sense of security." }
                ]
            },
            {
                "id": "tprm_3",
                "question": "Are contractual security requirements enforced?",
                "description": "Your contracts with third-party vendors should include specific, enforceable security requirements, including the right to audit, incident notification obligations, and data handling standards.",
                "category": "Contract Management",
                "examples": ["Right to audit clauses", "Security SLAs", "Incident notification requirements"],
                "options": [
                    { "text": "Yes, all vendor contracts include a robust set of security requirements.", "points": 2, "risk": "Low", "recommendation": "Regularly review and update your standard security addendum for vendor contracts to ensure it keeps pace with evolving threats and regulatory requirements." },
                    { "text": "Security requirements are included in some contracts but not all.", "points": 1, "risk": "Medium", "recommendation": "Work with your legal and procurement teams to ensure that your standard security requirements are included in all vendor contracts going forward." },
                    { "text": "No, our contracts do not include specific security requirements.", "points": 0, "risk": "High", "recommendation": "Develop a standard security addendum and make it a mandatory part of all vendor contracts. Without contractual obligations, you have little leverage to enforce security." }
                ]
            },
            {
                "id": "tprm_4",
                "question": "Is vendor system access monitored and controlled?",
                "description": "Access to your systems by third-party vendors should be strictly controlled based on the principle of least privilege, and all vendor activity should be logged and monitored.",
                "category": "Access Control",
                "examples": ["Least privilege access for vendors", "Just-in-Time vendor access", "Session monitoring for vendor activity"],
                "options": [
                    { "text": "Yes, vendor access is tightly controlled, monitored, and regularly reviewed.", "points": 2, "risk": "Low", "recommendation": "Implement a process to automatically disable vendor accounts as soon as a contract is terminated or a project is completed." },
                    { "text": "Vendors are given access, but it is not closely monitored or managed.", "points": 1, "risk": "Medium", "recommendation": "Implement a formal process for provisioning, reviewing, and de-provisioning vendor access. Treat vendor accounts with the same level of scrutiny as your own privileged accounts." },
                    { "text": "No, vendor access is not controlled or monitored.", "points": 0, "risk": "Critical", "recommendation": "Immediately implement controls for vendor access. Unmonitored vendor access is a common vector for major security breaches." }
                ]
            },
            {
                "id": "tprm_5",
                "question": "Are fourth-party (vendor's vendor) risks evaluated?",
                "description": "Your risk exposure extends to your vendors' vendors (fourth parties). A mature TPRM program includes an assessment of the risks posed by these critical downstream dependencies.",
                "category": "Supply Chain Risk",
                "examples": ["Asking vendors about their own TPRM", "Supply chain mapping", "Using intelligence to identify key dependencies"],
                "options": [
                    { "text": "Yes, we assess and manage the risk from our critical fourth-party vendors.", "points": 2, "risk": "Low", "recommendation": "Work with your critical vendors to gain better visibility into their supply chain and ensure they are effectively managing their own third-party risks." },
                    { "text": "We are aware of the risk but do not have a formal process to evaluate it.", "points": 1, "risk": "Medium", "recommendation": "Begin incorporating questions about fourth-party risk into your vendor assessment process. Ask your critical vendors how they manage risk in their own supply chain." },
                    { "text": "No, we do not consider fourth-party risk.", "points": 0, "risk": "High", "recommendation": "Start considering fourth-party risk as part of your TPRM program. A breach at a key fourth party can have the same impact on your organization as a breach at your direct vendor." }
                ]
            }
        ]
    },
    "Framework": {
        "weight": 0.04, "icon": "📋", "description": "Framework alignment, compliance, and governance standards (Mandatory).",
        "questions": [
            {
                "id": "framework_1",
                "question": "Is your organization aligned with the NIST Cybersecurity Framework?",
                "description": "Aligning with a standard cybersecurity framework like the one from NIST provides a structured, comprehensive, and repeatable approach to managing cybersecurity risk.",
                "category": "Framework Alignment",
                "examples": ["NIST CSF", "ISO 27001", "CIS Controls"],
                "options": [
                    { "text": "Yes, we are fully aligned with the NIST CSF and use it to manage our security program.", "points": 2, "risk": "Low", "recommendation": "Use the framework to communicate the state of your security program to business leadership and the board in a language they can understand." },
                    { "text": "We are partially aligned or use a custom, informal framework.", "points": 1, "risk": "Medium", "recommendation": "Formalize your alignment with a standard framework like the NIST CSF. This will help you to identify gaps in your program and prioritize your security investments." },
                    { "text": "No, we are not aligned with any formal cybersecurity framework.", "points": 0, "risk": "High", "recommendation": "Adopt a standard cybersecurity framework immediately. Operating without one is like building a house without a blueprint." }
                ]
            },
            {
                "id": "framework_2",
                "question": "Is Continuous Threat Exposure Management (CTEM) implemented?",
                "description": "CTEM is a modern approach that moves beyond periodic vulnerability scanning to continuously discover, prioritize, and validate the threats that are most likely to be exploited in your unique environment.",
                "category": "Exposure Management",
                "examples": ["Attack Surface Management (ASM)", "Breach and Attack Simulation (BAS)", "Risk-based vulnerability prioritization"],
                "options": [
                    { "text": "Yes, we have a mature CTEM program in place.", "points": 3, "risk": "Low", "recommendation": "Use the findings from your CTEM program to provide real-world data that can be used to tune your security controls and detection rules." },
                    { "text": "We perform regular vulnerability scanning but do not have a full CTEM program.", "points": 1, "risk": "Medium", "recommendation": "Evolve your vulnerability management program into a CTEM program. This involves adding capabilities like external attack surface management and breach and attack simulation." },
                    { "text": "No, we do not have a formal program for managing our threat exposure.", "points": 0, "risk": "Critical", "recommendation": "Implement a CTEM program. In a complex, modern environment, you need a continuous, risk-based approach to managing your attack surface." }
                ]
            },
            {
                "id": "framework_3",
                "question": "Are security mesh architecture principles adopted?",
                "description": "A cybersecurity mesh architecture is a modern, composable approach to security where controls are distributed and managed from a central policy engine, rather than being deployed in a monolithic perimeter.",
                "category": "Security Architecture",
                "examples": ["Distributed identity services", "Centralized policy management", "Security as a platform"],
                "options": [
                    { "text": "Yes, our security architecture is based on mesh principles.", "points": 2, "risk": "Low", "recommendation": "Ensure that your centralized policy management engine has a comprehensive view of all the distributed security controls to ensure consistent policy enforcement." },
                    { "text": "We are beginning to adopt some elements of a security mesh.", "points": 1, "risk": "Medium", "recommendation": "Develop a formal strategy to move towards a security mesh architecture. This will provide the agility and scalability needed to secure modern, distributed IT environments." },
                    { "text": "No, we have a traditional, perimeter-based security architecture.", "points": 0, "risk": "High", "recommendation": "Begin evolving your security architecture towards a mesh model. The traditional 'castle-and-moat' approach to security is no longer effective in a world of cloud and remote work." }
                ]
            },
            {
                "id": "framework_4",
                "question": "Is your organization compliant with relevant regulatory frameworks?",
                "description": "Compliance with relevant regulations (e.g., GDPR, HIPAA, PCI-DSS) is a critical component of any security program and a key responsibility of the CISO.",
                "category": "Compliance",
                "examples": ["GDPR", "HIPAA", "PCI-DSS", "SOX"],
                "options": [
                    { "text": "Yes, we have a mature program for managing compliance with all relevant regulations.", "points": 2, "risk": "Low", "recommendation": "Automate the collection of compliance evidence to reduce the manual effort required for audits and to move towards a state of continuous compliance." },
                    { "text": "We are compliant, but the process is largely manual and ad-hoc.", "points": 1, "risk": "Medium", "recommendation": "Implement a Governance, Risk, and Compliance (GRC) tool to help manage and automate your compliance activities." },
                    { "text": "No, we do not have a formal compliance program.", "points": 0, "risk": "Critical", "recommendation": "Establish a formal compliance program immediately. Non-compliance can result in significant fines, reputational damage, and legal action." }
                ]
            },
            {
                "id": "framework_5",
                "question": "Are security policies regularly reviewed and updated?",
                "description": "Security policies should be living documents that are reviewed and updated on a regular basis (e.g., annually) to ensure they remain relevant and effective in the face of changing business needs and threats.",
                "category": "Governance",
                "examples": ["Annual policy review cycle", "Policy exception management process", "Policy version control"],
                "options": [
                    { "text": "Yes, all security policies are reviewed and updated at least annually.", "points": 2, "risk": "Low", "recommendation": "Implement a formal process for managing policy exceptions to ensure that they are properly risk-assessed, documented, and approved." },
                    { "text": "Policies are reviewed on an ad-hoc basis, but not as part of a formal process.", "points": 1, "risk": "Medium", "recommendation": "Establish a formal, annual review cycle for all of your key security policies. Assign a specific owner to each policy to be responsible for the review." },
                    { "text": "No, our security policies are old and out of date.", "points": 0, "risk": "High", "recommendation": "Initiate a project to review and update all of your security policies. Out-of-date policies are not enforceable and provide a false sense of security." }
                ]
            }
        ]
    }
  }
};
