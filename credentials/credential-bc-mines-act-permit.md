---
layout: default
title: B.C. Mines Act Permit - DRAFT
parent: Credentials
---

# B.C. Mines Act Permit - DRAFT
# 1. Primary Document

## 1.1 Introduction

[The Mines Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96293_01) regulates mining activities in British Columbia (B.C.) – from early exploration to development, production, reclamation, closure, and post-closure. A permit must be in place before any work in, on, or about a mine can occur. A B.C. Mines Act Permit credential issued according to this Governance Framework (GF) grants the credential holder the same rights as a permittee holder in receipt of a paper and/or digital copy of a B.C. Mines Act Permit.  

Further information can be found online: 
 - [B.C. Mine Information](https://mines.nrs.gov.bc.ca/) 
 - [B.C. Mine Permitting](https://www2.gov.bc.ca/gov/content/industry/mineral-exploration-mining/permitting)

The development of this documentation follows the governance framework created by the [Trust over IP Foundation (ToIP)](https://trustoverip.org/) [Governance Metamodel Specification](https://trustoverip.org/wp-content/uploads/ToIP-Governance-Metamodel-Specification-V1.0-2022-12-21.pdf) created by the [Governance Stack Working Group (GSWG)](https://wiki.trustoverip.org/display/HOME/Governance+Stack+Working+Group).

These materials are made available under and are subject to the [Creative Commons Attribution 4.0 International license](http://creativecommons.org/licenses/by/4.0/legalcode).

THESE MATERIALS ARE PROVIDED “AS IS.” The Trust Over IP Foundation, established as the Joint Development Foundation Projects, LLC, Trust Over IP Foundation Series ("ToIP"), and its members and contributors (each of ToIP, its members and contributors, a "ToIP Party") expressly disclaim any warranties (express, implied, or otherwise), including implied warranties of merchantability, non-infringement, fitness for a particular purpose, or title, related to the materials. The entire risk as to implementing or otherwise using the materials is assumed by the implementer and user. 

IN NO EVENT WILL ANY ToIP PARTY BE LIABLE TO ANY OTHER PARTY FOR LOST PROFITS OR ANY FORM OF INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES OF ANY CHARACTER FROM ANY CAUSES OF ACTION OF ANY KIND WITH RESPECT TO THESE MATERIALS, ANY DELIVERABLE OR THE ToIP GOVERNING AGREEMENT, WHETHER BASED ON BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE, AND WHETHER OR NOT THE OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

***Acknowledgements***

This governance framework includes structural elements from the Trust over IP Metamodel that were developed by Governance Stack Working Group of the Trust over IP Foundation, the eSSIF Lab Glossary and Mental Models, were contributed to the Trust Over IP Foundation under the CC BY-SA 4.0 license.  There have also been contributions from the Concepts & Terminology Working Group at ToIP, the Human Experience Working Group at ToIP and the Ecosystem Foundry Working Group at ToIP, the work of the Governance Framework Working Group at Sovrin Foundation is also acknowledged in providing support.
## 1.2. Terminology and Notation

Please reference [Glossary - General Trust Over IP Terms](https://trustoverip.github.io/toip/glossary).

**Requirements** include any combination of Machine-Testable Requirements and Human-Auditable Requirements. Unless otherwise stated, all Requirements MUST be expressed as defined in [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119).

- Mandates are Requirements that use a MUST, MUST NOT, SHALL, SHALL NOT or REQUIRED keyword.
- Recommendations are Requirements that use a SHOULD, SHOULD NOT, or RECOMMENDED keyword.
- Options are Requirements that use a MAY or OPTIONAL keyword.

**Machine-Testable Requirements** are those with which compliance can be verified using an automated test suite and appropriate scripting or testing software.

**Rules** are Machine-Testable Requirements that are written in a Machine-Readable language and can be processed by a Rules Engine. They are expressed in a structured rules language as specified by the Governance Framework.

**Human-Auditable Requirements** are those with which compliance can only be verified by an audit of people, processes, and procedures.

**Policies** are Human-Auditable Requirements written using standard conformance terminology. The Policies used in the Governance Framework will use the standard terminology detailed in RFC 2119 keywords. Note that all RFC 2119 keywords have weight from an auditing perspective. An implementer MUST explain why a SHOULD or RECOMMENDED requirement was not implemented and SHOULD explain why a MAY requirement was implemented.

**Specifications** are documents containing any combination of Machine-Testable Requirements and Human-Auditable Requirements needed to produce technical interoperability.

## 1.3. Localization

The standard language for this governing framework (GF) is English.

## 1.4 Governing Authority

The Chief Permitting Officer (CPO) is the governing authority responsible for this GF as defined in section 8.2 of [the Mines Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96293_01#section8.2). The CPO may delegate in writing to an inspector any of the powers conferred on the CPO under this Act.

The contact information for the CPO is: 
* 	**Name:** Lowell Constable
* 	**Title:** Executive Director and Deputy Chief Inspector
* 	**Organization:** Major Mines Office
* 	**Email:** Lowell.Constable@gov.bc.ca

## 1.5. Administering Authority

The Mines Digital Services (MDS) team is the administering authority responsible for this GF. MDS has replaced the legacy Mine Management System (MMS) with a suite of scalable, open-source, and data-driven technologies to support mine oversight in B.C.

The contact information for MDS is: 
* 	**Name:** Rebecca Stevenson
* 	**Title:** Project Owner
* 	**Organization:** Mines Digital Services
* 	**Email:** rebecca.stevenson@gov.bc.ca

## 1.6 Purpose 

The purpose of this GF is to define the B.C. Mines Act Permit credential. 

## 1.7 Scope

The initial scope of the B.C. Mines Act Permit credential is summary information for operating permits of major mines in B.C. 

## 1.8 Objectives 

To allow mine operators to hold proof of an operating permit in a verifiable credential format that is both secure and tamperproof. 

## 1.9 Principles 

[The B.C. Public Service](https://www2.gov.bc.ca/gov/content/careers-myhr/about-the-bc-public-service/ethics-standards-of-conduct/corporate-values) has one overarching corporate value, __Integrity__, and 6 core corporate values: Curiosity, Service, Passion, Teamwork, Accountability, and Courage. __Integrity__ is placed above all the other values as a quality that affirms the [Standards of Conduct for the B.C. Public Service](https://www2.gov.bc.ca/gov/content/careers-myhr/about-the-bc-public-service/ethics-standards-of-conduct/standards-of-conduct).

## 1.10 General Requirements

Mining activities in British Columbia are subject to a variety of different provincial and federal regulations. The main pieces of legislation that govern major mines in B.C. are the [Environmental Assessment Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/18051), [the Mines Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96293_01) and [the Environmental Management Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/03053_00). Mining permits MUST be issued by the ministry responsible for mining activities through the authority of the Chief Permitting Officer (CPO) under [section 10 of the Mines Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96293_01#section10).

## 1.11. Revisions

Version 1.0. 

## 1.12. Extensions

There are no extensions to this GF.  

## 1.13. Schedule of Controlled Documents

N/A

# 2. Controlled Documents

## 2.1. Glossary
[ToIP Core Glossary](https://trustoverip.github.io/toip/glossary)

[B.C. Mines Act Definitions](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96293_01#section1)
*  **Credential Holders**: Mining operators within B.C.
*  **Mines Act Permit Holder**: A person and/or a company in whose name a Mines Act Permit is recorded in the division records.
*  **Mines**: Moderate to large-scale mineral and coal mining operations, including sand and gravel pits, quarries, and placer mines.
*  **Major Mines**: Metal and coal mines as well as some large aggregate and industrial minerals operations.
* 	**Coordinated Authorizations**: Designated by the Chief Permitting Officer (CPO) to manage projects that require multiple permits. 
* 	**Major Mines Office (MMO)**: All construction and operations permit applications for coal and mineral mines are managed by the Major Mines Office (MMO).

## 2.2. Risk Assessment
In accordance with B.C. government procedures and policies, the standard [Privacy Impact Assessment (PIA)](https://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/privacy/privacy-impact-assessments) and [Security Threat and Risk Assessment (STRA)](https://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/information-security/security-threat-and-risk-assessment) processes have been completed for the use of this credential technology.

## 2.3. Trust Assurance and Certification
Development of digital technology is led by [British Columbia’s Digital Code of Practice](https://digital.gov.bc.ca/resources/digital-principles), applicable to all public service employees and contractors involved in and accountable for digital service delivery.

## 2.4. Governance Requirements

Legislation and regulations govern the disposition, administration, and management of mines in B.C. 
[The Mines Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96293_01).

- **[B.C. Mine Information](https://mines.nrs.gov.bc.ca/)**
- **[B.C. Mine Authorizations](https://mines.nrs.gov.bc.ca/authorizations)**

## 2.5. Business Requirements

The primary use of the B.C. Mines Act Permit credential is for permit holders within BC to prove they are in compliance with the [B.C. Mines Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96293_01). 

## 2.6. Technical Requirements (Credential)
The format for this credential is [AnonCreds specification](https://wiki.hyperledger.org/display/anoncreds).

## 2.6.1 Schema Definition

__Schema Name:__ bc-mines-act-permit

__Schema Version:__ 1.0

This schema definition follows [the AnonCreds specification](https://wiki.hyperledger.org/display/anoncreds).

Name | Attribute | Format | Rules | Notes	
--- | --- | --- | --- | --- |
Permit Number | permit_no | String | not NULL| (up to 3-digit) alpha-numeric identifier: **M-##- or C-##-** Permit Numbers are assigned to a specific mining operation or activity that has been granted permission or authorization. [Mines Act Section 10 (1)](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96293_01#section10).
Permit Status | permit_status_code | String | not NULL | Defined as either "open" or "closed".
Permittee | mine_party_appt | String | not NULL | Name of the mining company that holds the permit.
Mine Operation Status | mine_operation_status_code | String | not NULL | Layer one in the hierarchy of identifying mine status. Mines status can be (1) Abandoned (2) Closed (3) Not Started (4) Operating.
Mine Operation Status Reason | mine_operation_status_reason_code | String | not NULL | Layer two in the hierarchy for identifying mine status. **Reasons for Closed Mines** (1) Closed for Care and Maintenance, (2) Closed for Reclamation and (3) Closed for Unknown. **Reasons for Operating** (1) Operating Seasonal, or (2) Operating Year Round
Mine Operation Status Sub Reason | mine_operation_status_sub_reason_code | String | not NULL | Layer three in the hierarchy for identifying mine status. Mine Operation **Reasons for "Closed for Reclamation"** (1) Long-Term Maintenance (2) Long-Term Maintenance and Water Treatment or (3) Permit Release Pending.
Mine Commodity | mine_commodity_code | String | not NULL | Name of the commodities being mined.
Disturbance | mine_disturbance_code | String | not NULL | Specifies if mine is above ground (surface) or below ground (sub-surface).
Mine Number | mine_no | String | not NULL | (7-digit) Unique identifier assigned to a specific mine or mining operation to differentiate and track individual mines within a jurisdiction.
Permit Start Date| issue_date | String | not NULL | (YYYY-MM-DD) The original issue date of the permit.
Latitude | latitude| String | not NULL | (00.0000000) The geographic coordinate representing the north-south position of a specific location related to the administrative building at the mining operation or mine site.
Longitude | longitude | String | not NULL | (-000.0000000) The geographic coordinate that represents the east-west position of a specific location related to the administrative building at the mining operation or mine site.
Bond Total | bond_total | String | not NULL | ($0.00) Lists the total bond value of the permit. A permittee is required to provide monetary security to cover reclamation costs, and to provide for the protection of, and mitigation of damage to, watercourses and cultural heritage resources affected by the mine. 
Mine Tailings Storage Facility Operating Count | tsf_operating_count | String | not NULL | numerical value for the total number of tailing storage facilities that are in Operating status.
Mine Tailings Storage Facility Care and Maintenance Count | tsf_care_and_maintenance_count | String | not NULL | numerical value for the total number of tailing storage facilities that are in Care and Maintenance status.


### 2.6.2. Credential Implementation
Ledger | CRED_DEF_ID | Notes |
--- | --- | --- |
bcorvin test | S7S2wzcF2giKuwxdeLBk69:3:CL:80097:js-dev | *Created for testing - 2023-09-27* |

### 2.6.3 Schema Implementation
Ledger | SCHEMA_ID | Notes |
--- | --- | --- |
bcorvin test | S7S2wzcF2giKuwxdeLBk69:2:mines-act-permit:0.3 | *Created for testing - 2023-09-27* |

## 2.7. Information Trust Requirements

The [Freedom of Information and Protection of Privacy Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96165_00) sets out the access and privacy rights of individuals as they relate to the public sector in British Columbia.

## 2.8. Inclusion, Equitability, and Accessibility Requirements

The [Accessible British Columbia Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/21019) informs [**AccessibleBC**](https://www2.gov.bc.ca/gov/content/governments/about-the-bc-government/accessibility/legislation/accessiblebc).

The [Diversity & Inclusion Strategy for the BC Public Service](https://www2.gov.bc.ca/gov/content/careers-myhr/about-the-bc-public-service/diversity-inclusion/diversity-inclusion-strategy) outlines the commitments of BC government in supporting inclusion, equitability and access throughout the province.

The [Declaration on the Rights of Indigenous Peoples Act (Declaration Act)](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/19044) establishes the United Nations Declaration on the Rights of Indigenous Peoples (UN Declaration) as B.C.’s framework for reconciliation that respects the human rights of Indigenous Peoples.

## 2.9. Legal Agreements
On receipt of a B.C. Mines Act Permit credential issued according to this GF, the credential holder shall be granted the same rights as a permittee holder in receipt of a paper and/or digital copy of a B.C. Mines Act Permit under the [B.C. Mines Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96293_01).

# End of Document

