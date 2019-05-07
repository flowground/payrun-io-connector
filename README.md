# ![LOGO](logo.png) PayRun.IO **flow**ground Connector

## Description

A generated **flow**ground connector for the PayRun.IO API (version 19.20.2.90).

Generated from: https://api.apis.guru/v2/specs/payrun.io/19.20.2.90/swagger.json<br/>
Generated at: 2019-05-07T17:43:40+03:00

## API Description

Open, scableable, transparent payroll API.

## Authorization

This API does not require authorization.

## Actions

### Delete an Employer

> Delete the specified employer

*Tags:* `Employer`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the employer

> Get the specified employer object

*Tags:* `Employer`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Patches the employer

> Patches the specified employer with the supplied values

*Tags:* `Employer`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Updates the Employer

> Updates the existing specified employer object

*Tags:* `Employer`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get CIS line types with tag

> Gets the CIS line types with the tag

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete an CIS line type

> Delete the specified CIS line type

*Tags:* `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `CisLineTypeId` - _required_ - The CIS line type unique identifier. E.g. TYPEA
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get CIS line type from employer

> Gets the specified CIS line type from employer.

*Tags:* `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `CisLineTypeId` - _required_ - The CIS line type unique identifier. E.g. TYPEA
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Updates the CIS line type

> Updates the existing specified CIS line type object

*Tags:* `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `CisLineTypeId` - _required_ - The CIS line type unique identifier. E.g. TYPEA
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete CIS line type tag

> Deletes a tag from the CIS line type

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `CisLineTypeId` - _required_ - The CIS line type unique identifier. E.g. TYPEA
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get CIS line type tag

> Gets the tag from the CIS line type

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `CisLineTypeId` - _required_ - The CIS line type unique identifier. E.g. TYPEA
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Insert CIS line type tag

> Inserts a new tag on the CIS line type

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `CisLineTypeId` - _required_ - The CIS line type unique identifier. E.g. TYPEA
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all tags from the CIS line type

> Gets all the tags from the CIS line type

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `CisLineTypeId` - _required_ - The CIS line type unique identifier. E.g. TYPEA
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get CIS line types from employer.

> Get links to all CIS line types for the specified employer.

*Tags:* `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Create a new CIS line type

> Create a new CIS line type object

*Tags:* `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get CIS line types with tag

> Gets the CIS line type with the tag

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all CIS line type tags

> Gets all the CIS line type tags

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete the CIS transaction

> Deletes the specified CIS transaction

*Tags:* `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `CisTransactionId` - _required_ - The CIS transaction unique identifier. E.g. CISTRAN001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get the CIS transaction

> Returns the specified CIS transaction

*Tags:* `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `CisTransactionId` - _required_ - The CIS transaction unique identifier. E.g. CISTRAN001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all CIS transactions for the employer

> Get links for all CIS transactions for the specified employer

*Tags:* `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Deletes the DPS message

*Tags:* `DpsMessage`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `DpsMessageId` - _required_ - The DPS message unique identifier. E.g. DPS001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the DPS message

*Tags:* `DpsMessage`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `DpsMessageId` - _required_ - The DPS message unique identifier. E.g. DPS001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Patches the DPS message

> Patches the specified DPS message with the supplied values

*Tags:* `DpsMessage`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `DpsMessageId` - _required_ - The DPS message unique identifier. E.g. DPS001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the DPS messages

> Gets the DPS message links

*Tags:* `DpsMessage`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete an Employee

> Delete the specified employee

*Tags:* `Employee`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get employee from employer

> Gets the specified employee from employer by employee code.

*Tags:* `Employee`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Patches the employee

> Patches the specified employee with the supplied values

*Tags:* `Employee`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Updates the Employee

> Updates the existing specified employee object

*Tags:* `Employee`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete auto enrolment assessment

> Deletes an existing auto enrolment assessment for the employee. Used to remove historical assessments

*Tags:* `AEAssessment`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `AEAssessmentId` - _required_ - The auto enrolment assessment unique identifier. E.g. AE001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get the auto enrolment assessment

> Gets the auto enrolment assessment from the specified employee

*Tags:* `AEAssessment` `Employee`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `AEAssessmentId` - _required_ - The auto enrolment assessment unique identifier. E.g. AE001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Insert new auto enrolment assessment

> Creates a new auto enrolment assessment for the employee. Used to insert historical assessments

*Tags:* `AEAssessment`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `AEAssessmentId` - _required_ - The auto enrolment assessment unique identifier. E.g. AE001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get the auto enrolment assessments

> Gets all auto enrolment assessments from the specified employee

*Tags:* `AEAssessment` `Employee`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Insert new auto enrolment assessment

> Creates a new auto enrolment assessment for the employee. Used to insert historical assessments

*Tags:* `AEAssessment`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get links to all commentaries for the specified employee

> Get links to all commentaries for the specified employee.

*Tags:* `Employee`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get commentary from employee

> Gets the specified commentary report from the employee

*Tags:* `Employee`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `CommentaryId` - _required_ - The commentary unique identifier. E.g. C001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get pay instructions with tag

> Gets the pay instructions with the tag

*Tags:* `Tagging` `PayInstruction`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Deletes a pay instruction

> Delete the specified pay instruction

*Tags:* `PayInstruction`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `PayInstructionId` - _required_ - The pay instruction unique identifier. E.g. SAL001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the specified pay instruction from the employee

> Returns the specified pay instruction from employee

*Tags:* `PayInstruction`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `PayInstructionId` - _required_ - The pay instruction unique identifier. E.g. SAL001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Sparse Update of a Pay Instruction

> Patches the specified pay instruction with the supplied values

*Tags:* `PayInstruction`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `PayInstructionId` - _required_ - The pay instruction unique identifier. E.g. SAL001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Update a Pay Instruction

> Updates the existing specified pay instruction object

*Tags:* `PayInstruction`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `PayInstructionId` - _required_ - The pay instruction unique identifier. E.g. SAL001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete pay instruction tag

> Deletes a tag from the pay instruction

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `PayInstructionId` - _required_ - The pay instruction unique identifier. E.g. SAL001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get pay instruction tag

> Gets the tag from the pay instruction

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `PayInstructionId` - _required_ - The pay instruction unique identifier. E.g. SAL001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Insert pay instruction tag

> Inserts a new tag on the pay instruction

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `PayInstructionId` - _required_ - The pay instruction unique identifier. E.g. SAL001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all tags from the pay instruction

> Gets all the tags from the pay instruction

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `PayInstructionId` - _required_ - The pay instruction unique identifier. E.g. SAL001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the pay instructions from the specified employee

> Get links to all pay instructions for the specified employee

*Tags:* `PayInstruction`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Creates a new Pay Instruction

> Creates a new pay instruction object

*Tags:* `PayInstruction`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get pay instructions with tag

> Gets the pay instructions with the tag

*Tags:* `Tagging` `PayInstruction`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all pay instruction tags

> Gets all the pay instruction tags

*Tags:* `Tagging` `PayInstruction`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get pay lines with tag

> Gets the pay lines with the tag

*Tags:* `Tagging` `PayLine`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the specified pay line from the employee

> Returns the specified pay line from employee

*Tags:* `PayLine`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `PayLineId` - _required_ - The pay line unique identifier. E.g. PL001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete pay line tag

> Deletes a tag from the pay line

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `PayLineId` - _required_ - The pay line unique identifier. E.g. PL001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get pay line tag

> Gets the tag from the pay line

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `PayLineId` - _required_ - The pay line unique identifier. E.g. PL001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Insert pay line tag

> Inserts a new tag on the pay line

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `PayLineId` - _required_ - The pay line unique identifier. E.g. PL001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all tags from the pay line

> Gets all the tags from the pay line

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `PayLineId` - _required_ - The pay line unique identifier. E.g. PL001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the pay lines from the specified employee

> Get links to all pay lines for the specified employee

*Tags:* `PayLine`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get pay lines with tag

> Gets the pay line with the tag

*Tags:* `Tagging` `PayLine`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all pay line tags

> Gets all the pay line tags

*Tags:* `Tagging` `PayLine`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the pay runs from the employee

> Get links to all pay runs for the specified employee.

*Tags:* `PayRun` `Employee`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete an Employee revision matching the specified revision number.

> Deletes the specified employee revision for the matching revision number

*Tags:* `Employee`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `RevisionNumber` - _required_ - The revision number. E.g. 1
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the employee by revision number

> Get the employee revision matching the specified revision number

*Tags:* `Employee`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `RevisionNumber` - _required_ - The revision number. E.g. 1
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all employee revisions

> Gets links to all employee revisions

*Tags:* `Employee`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete employee tag

> Deletes a tag from the employee

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get employee tag

> Gets the tag from the employee

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Insert employee tag

> Inserts a new tag on the employee

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get employee revision tag

> Gets the tag from the employee revision

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `EffectiveDate` - _required_ - The effective date to be applied. E.g 2016-04-06
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all employee tags

> Gets all the tags from the employee

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all employee revision tags

> Gets all the tags from the employee revision

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `EffectiveDate` - _required_ - The effective date to be applied. E.g 2016-04-06
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete an Employee revision matching the specified revision date.

> Deletes the specified employee revision for the matching revision date

*Tags:* `Employee`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `EffectiveDate` - _required_ - The effective date to be applied. E.g 2016-04-06
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get employee by effective date.

> Returns the employee's state at the specified effective date.

*Tags:* `Employee`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `EffectiveDate` - _required_ - The effective date to be applied. E.g 2016-04-06
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get employees from employer.

> Get links to all employees for the specified employer.

*Tags:* `Employee`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Create a new Employee

> Create a new employee object

*Tags:* `Employee`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get employees with tag

> Gets the employees with the tag

*Tags:* `Tagging` `Employee`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all employee tags

> Gets all the employee tags

*Tags:* `Tagging` `Employee`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get employees from employer at a given effective date.

> Get links to all employees for the employer on specified effective date.

*Tags:* `Employee`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EffectiveDate` - _required_ - The effective date to be applied. E.g 2016-04-06
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get holiday schemes with tag

> Gets the holiday schemes with the tag

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete an holiday scheme

> Delete the specified holiday scheme

*Tags:* `HolidayScheme`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `HolidaySchemeId` - _required_ - The holiday schemes' unique identifier. E.g HOLSCH001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get holiday scheme from employer

> Gets the specified holiday scheme from employer.

*Tags:* `HolidayScheme`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `HolidaySchemeId` - _required_ - The holiday schemes' unique identifier. E.g HOLSCH001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Patches the holiday scheme

> Patches the specified holiday scheme with the supplied values

*Tags:* `HolidayScheme`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `HolidaySchemeId` - _required_ - The holiday schemes' unique identifier. E.g HOLSCH001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Updates the holiday scheme

> Updates the existing specified holiday scheme object

*Tags:* `HolidayScheme`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `HolidaySchemeId` - _required_ - The holiday schemes' unique identifier. E.g HOLSCH001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete an HolidayScheme revision matching the specified revision number.

> Deletes the specified holiday scheme revision for the matching revision number

*Tags:* `HolidayScheme`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `HolidaySchemeId` - _required_ - The holiday schemes' unique identifier. E.g HOLSCH001
* `RevisionNumber` - _required_ - The revision number. E.g. 1
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the holiday scheme revision by revision number

> Get the holiday scheme revision matching the specified revision number

*Tags:* `HolidayScheme`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `HolidaySchemeId` - _required_ - The holiday schemes' unique identifier. E.g HOLSCH001
* `RevisionNumber` - _required_ - The revision number. E.g. 1
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all holiday scheme revisions

> Gets links to all the holiday scheme revisions

*Tags:* `HolidayScheme`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `HolidaySchemeId` - _required_ - The holiday schemes' unique identifier. E.g HOLSCH001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete holiday scheme tag

> Deletes a tag from the holiday scheme

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `HolidaySchemeId` - _required_ - The holiday schemes' unique identifier. E.g HOLSCH001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get holiday scheme tag

> Gets the tag from the holiday scheme

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `HolidaySchemeId` - _required_ - The holiday schemes' unique identifier. E.g HOLSCH001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Insert holiday scheme tag

> Inserts a new tag on the holiday scheme

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `HolidaySchemeId` - _required_ - The holiday schemes' unique identifier. E.g HOLSCH001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get holiday scheme revision tag

> Gets the tag from the holiday scheme revision

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `HolidaySchemeId` - _required_ - The holiday schemes' unique identifier. E.g HOLSCH001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `EffectiveDate` - _required_ - The effective date to be applied. E.g 2016-04-06
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all tags from the holiday scheme

> Gets all the tags from the holiday scheme

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `HolidaySchemeId` - _required_ - The holiday schemes' unique identifier. E.g HOLSCH001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all holiday scheme revision tags

> Gets all the tags from the holiday scheme revision

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `HolidaySchemeId` - _required_ - The holiday schemes' unique identifier. E.g HOLSCH001
* `EffectiveDate` - _required_ - The effective date to be applied. E.g 2016-04-06
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete an holiday scheme revision matching the specified revision date.

> Deletes the specified holiday scheme revision for the matching revision date

*Tags:* `HolidayScheme`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `HolidaySchemeId` - _required_ - The holiday schemes' unique identifier. E.g HOLSCH001
* `EffectiveDate` - _required_ - The effective date to be applied. E.g 2016-04-06
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get holiday scheme by effective date.

> Returns the holiday scheme's state at the specified effective date.

*Tags:* `HolidayScheme`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `HolidaySchemeId` - _required_ - The holiday schemes' unique identifier. E.g HOLSCH001
* `EffectiveDate` - _required_ - The effective date to be applied. E.g 2016-04-06
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get holiday schemes from employer.

> Get links to all holiday schemes for the specified employer.

*Tags:* `HolidayScheme`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Create a new holiday scheme

> Create a new holiday scheme object

*Tags:* `HolidayScheme`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get holiday schemes with tag

> Gets the holiday scheme with the tag

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all holiday scheme tags

> Gets all the holiday scheme tags

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get holiday schemes from employer at a given effective date.

> Get links to all holiday schemes for the employer on specified effective date.

*Tags:* `HolidayScheme`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EffectiveDate` - _required_ - The effective date to be applied. E.g 2016-04-06
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Deletes the nominal codes

> Deletes the nominal code

*Tags:* `NominalCode`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `NominalCodeId` - _required_ - The nominal code unique identifier. E.g. NOM001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the nominal code

*Tags:* `NominalCode`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `NominalCodeId` - _required_ - The nominal code unique identifier. E.g. NOM001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Insert nominal code

> Inserts a new nominal code at the specified resource location

*Tags:* `NominalCode`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `NominalCodeId` - _required_ - The nominal code unique identifier. E.g. NOM001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the pay codes by nominal code

> Get the pay codes that share the specified nominal code

*Tags:* `PayCode`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `NominalCodeId` - _required_ - The nominal code unique identifier. E.g. NOM001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the nominal codes

> Gets the nominal code links

*Tags:* `NominalCode`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Insert nominal code

> Inserts a new nominal code

*Tags:* `NominalCode`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Deletes a pay code

> Delete the specified pay code

*Tags:* `PayCode`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayCodeId` - _required_ - The pay code unique identifier. E.g. BASIC
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the specified pay code from the employer

> Returns the specified pay code from the employer

*Tags:* `PayCode`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayCodeId` - _required_ - The pay code unique identifier. E.g. BASIC
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Patches the pay code

> Patches the specified pay code object with the supplied values

*Tags:* `PayCode`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayCodeId` - _required_ - The pay code unique identifier. E.g. BASIC
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Updates a pay code

> Updates the existing specified pay code object

*Tags:* `PayCode`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayCodeId` - _required_ - The pay code unique identifier. E.g. BASIC
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete an PayCode revision matching the specified revision number.

> Deletes the specified pay code revision for the matching revision number

*Tags:* `PayCode`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayCodeId` - _required_ - The pay code unique identifier. E.g. BASIC
* `RevisionNumber` - _required_ - The revision number. E.g. 1
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the pay code by revision number

> Get the pay code revision matching the specified revision number

*Tags:* `PayCode`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayCodeId` - _required_ - The pay code unique identifier. E.g. BASIC
* `RevisionNumber` - _required_ - The revision number. E.g. 1
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all revisions of the Pay Code

> Returns links to all revisions of the pay code

*Tags:* `PayCode`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayCodeId` - _required_ - The pay code unique identifier. E.g. BASIC
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete pay code tag

> Deletes a tag from the pay code

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayCodeId` - _required_ - The pay code unique identifier. E.g. BASIC
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get pay code tag

> Gets the tag from the pay code

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayCodeId` - _required_ - The pay code unique identifier. E.g. BASIC
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Insert pay code tag

> Inserts a new tag on the pay code

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayCodeId` - _required_ - The pay code unique identifier. E.g. BASIC
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all pay code tags

> Gets all the tags from the pay code

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayCodeId` - _required_ - The pay code unique identifier. E.g. BASIC
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Deletes a pay code revision

> Delete the pay code revision for the specified date

*Tags:* `PayCode`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayCodeId` - _required_ - The pay code unique identifier. E.g. BASIC
* `EffectiveDate` - _required_ - The effective date to be applied. E.g 2016-04-06
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets pay code for specified date

> Gets the pay code revision for the specified effective date

*Tags:* `PayCode`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayCodeId` - _required_ - The pay code unique identifier. E.g. BASIC
* `EffectiveDate` - _required_ - The effective date to be applied. E.g 2016-04-06
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the pay codes from the employer

> Get links to all the pay codes for the specified employer

*Tags:* `PayCode`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Create a new pay code

> Create a new pay code object

*Tags:* `PayCode`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get pay codes with tag

> Gets the pay codes with the tag

*Tags:* `Tagging` `PayCode`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all pay code tags

> Gets all the pay code tags

*Tags:* `Tagging` `PayCode`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets all pay codes for specified date

> Gets the effective pay code revision for the specified date

*Tags:* `PayCode`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EffectiveDate` - _required_ - The effective date to be applied. E.g 2016-04-06
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Deletes a pay schedule

> Delete the specified pay schedule

*Tags:* `PaySchedule`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayScheduleId` - _required_ - The pay schedules' unique identifier. E.g SCH001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the specified pay schedule from the employer

> Returns the specified pay schedule object from employer

*Tags:* `PaySchedule`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayScheduleId` - _required_ - The pay schedules' unique identifier. E.g SCH001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Updates a pay schedule

> Updates the existing specified pay schedule object

*Tags:* `PaySchedule`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayScheduleId` - _required_ - The pay schedules' unique identifier. E.g SCH001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all employees revisions from a pay schedule.

> Gets links to all employee revisions that have ever existed in the specified pay schedule.

*Tags:* `Employee` `PaySchedule`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayScheduleId` - _required_ - The pay schedules' unique identifier. E.g SCH001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get employees from a pay schedule on effective date.

> Gets links to all employee revisions in the specified pay schedule for the given effective date.

*Tags:* `Employee` `PaySchedule`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayScheduleId` - _required_ - The pay schedules' unique identifier. E.g SCH001
* `EffectiveDate` - _required_ - The effective date to be applied. E.g 2016-04-06
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Deletes a pay run

> Delete the specified pay run

*Tags:* `PayRun`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayScheduleId` - _required_ - The pay schedules' unique identifier. E.g SCH001
* `PayRunId` - _required_ - The pay runs' unique identifier. E.g. PR001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the pay run from the pay schedule

> Returns the pay run from the pay schedule

*Tags:* `PayRun` `PaySchedule`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayScheduleId` - _required_ - The pay schedules' unique identifier. E.g SCH001
* `PayRunId` - _required_ - The pay runs' unique identifier. E.g. PR001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get the auto enrolment assessments

> Gets all auto enrolment assessments from the specified pay run

*Tags:* `AEAssessment` `PayRun`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayScheduleId` - _required_ - The pay schedules' unique identifier. E.g SCH001
* `PayRunId` - _required_ - The pay runs' unique identifier. E.g. PR001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get links to all commentaries for the specified pay run

> Get links to all commentaries for the specified pay run.

*Tags:* `PayRun`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayScheduleId` - _required_ - The pay schedules' unique identifier. E.g SCH001
* `PayRunId` - _required_ - The pay runs' unique identifier. E.g. PR001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Deletes a pay run employee

> Delete pay run results for a single employee

*Tags:* `PayRun`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayScheduleId` - _required_ - The pay schedules' unique identifier. E.g SCH001
* `PayRunId` - _required_ - The pay runs' unique identifier. E.g. PR001
* `EmployeeId` - _required_ - The employees' unique identifier. E.g EE001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get employees from the pay run

> Gets links to all employees included in the specified pay run.

*Tags:* `Employee` `PayRun`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayScheduleId` - _required_ - The pay schedules' unique identifier. E.g SCH001
* `PayRunId` - _required_ - The pay runs' unique identifier. E.g. PR001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the report lines from the specified pay run

> Returns all report lines associated with the specified pay run

*Tags:* `ReportLine` `PayRun`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayScheduleId` - _required_ - The pay schedules' unique identifier. E.g SCH001
* `PayRunId` - _required_ - The pay runs' unique identifier. E.g. PR001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete pay run tag

> Deletes a tag from the pay run

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayScheduleId` - _required_ - The pay schedules' unique identifier. E.g SCH001
* `PayRunId` - _required_ - The pay runs' unique identifier. E.g. PR001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get pay run tag

> Gets the tag from the pay run

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayScheduleId` - _required_ - The pay schedules' unique identifier. E.g SCH001
* `PayRunId` - _required_ - The pay runs' unique identifier. E.g. PR001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Insert pay run tag

> Inserts a new tag on the pay run

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayScheduleId` - _required_ - The pay schedules' unique identifier. E.g SCH001
* `PayRunId` - _required_ - The pay runs' unique identifier. E.g. PR001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all pay run tags

> Gets all the tags from the pay run

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayScheduleId` - _required_ - The pay schedules' unique identifier. E.g SCH001
* `PayRunId` - _required_ - The pay runs' unique identifier. E.g. PR001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the pay runs from the pay schedule

> Get links to all pay runs for the specified pay schedule

*Tags:* `PayRun` `PaySchedule`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayScheduleId` - _required_ - The pay schedules' unique identifier. E.g SCH001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get pay runs with tag

> Gets the pay runs with the tag

*Tags:* `Tagging` `PayRun`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayScheduleId` - _required_ - The pay schedules' unique identifier. E.g SCH001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all pay run tags

> Gets all the pay run tags

*Tags:* `Tagging` `PayRun`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayScheduleId` - _required_ - The pay schedules' unique identifier. E.g SCH001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete pay schedule tag

> Deletes a tag from the pay schedule

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayScheduleId` - _required_ - The pay schedules' unique identifier. E.g SCH001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get pay schedule tag

> Gets the tag from the pay schedule

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayScheduleId` - _required_ - The pay schedules' unique identifier. E.g SCH001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Insert pay schedule tag

> Inserts a new tag on the pay schedule

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayScheduleId` - _required_ - The pay schedules' unique identifier. E.g SCH001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all pay schedule tags

> Gets all the tags from the pay schedule

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PayScheduleId` - _required_ - The pay schedules' unique identifier. E.g SCH001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the pay schedule from the specified employer

> Get links to all pay schedules for the specified employer

*Tags:* `PaySchedule`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Create a new pay schedule

> Create a new pay schedule object

*Tags:* `PaySchedule`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get pay schedule with tag

> Gets the pay schedules with the tag

*Tags:* `Tagging` `PaySchedule`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all pay schedule tags

> Gets all the pay schedule tags

*Tags:* `Tagging` `PaySchedule`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete a Pension

> Delete the specified ppension

*Tags:* `Pension`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PensionId` - _required_ - The pensions' unique identifier. E.g PEN001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get pension from employer

> Gets the specified pension from employer by pension code.

*Tags:* `Pension`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PensionId` - _required_ - The pensions' unique identifier. E.g PEN001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Patches the pension

> Patches the specified pension with the supplied values

*Tags:* `Pension`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PensionId` - _required_ - The pensions' unique identifier. E.g PEN001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Updates the Pension

> Updates existing or inserts the specified pension object

*Tags:* `Pension`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PensionId` - _required_ - The pensions' unique identifier. E.g PEN001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete an Pension revision matching the specified revision number.

> Deletes the specified pension revision for the matching revision number

*Tags:* `Pension`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PensionId` - _required_ - The pensions' unique identifier. E.g PEN001
* `RevisionNumber` - _required_ - The revision number. E.g. 1
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the pension by revision number

> Get the pension revision matching the specified revision number

*Tags:* `Pension`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PensionId` - _required_ - The pensions' unique identifier. E.g PEN001
* `RevisionNumber` - _required_ - The revision number. E.g. 1
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all pension revisions

> Returns links to all revisions of the pension

*Tags:* `Pension`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PensionId` - _required_ - The pensions' unique identifier. E.g PEN001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete an Pension revision matching the specified revision date.

> Deletes the specified pension revision for the matching revision date

*Tags:* `Pension`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PensionId` - _required_ - The pensions' unique identifier. E.g PEN001
* `EffectiveDate` - _required_ - The effective date to be applied. E.g 2016-04-06
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get pension by effective date.

> Returns the penion's state at the specified effective date.

*Tags:* `Pension`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `PensionId` - _required_ - The pensions' unique identifier. E.g PEN001
* `EffectiveDate` - _required_ - The effective date to be applied. E.g 2016-04-06
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get pensions from employer.

> Get links to all pensions for the specified employer.

*Tags:* `Pension`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Create a new Pension

> Create a new pension object

*Tags:* `Pension`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get pensions from employer at a given effective date.

> Get links to all pensions for the employer on specified effective date.

*Tags:* `Pension`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EffectiveDate` - _required_ - The effective date to be applied. E.g 2016-04-06
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the specified report line from the employer

> Returns the specified pay line from employee

*Tags:* `ReportLine`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `ReportLineId` - _required_ - The report line unique identifier. E.g. RTL001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the report lines from the specified employer

> Get links to all report lines for the specified employee

*Tags:* `ReportLine`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Deletes a reporting instruction

> Delete the specified reporting instruction

*Tags:* `ReportLineInstruction`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `ReportingInstructionId` - _required_ - The reporting instruction unique identifier. E.g. SERRPT001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the specified reporting instruction from the employer

> Returns the specified pay instruction from employee

*Tags:* `ReportLineInstruction`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `ReportingInstructionId` - _required_ - The reporting instruction unique identifier. E.g. SERRPT001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Update a reporting Instruction

> Updates the existing specified reporting instruction object

*Tags:* `ReportLineInstruction`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `ReportingInstructionId` - _required_ - The reporting instruction unique identifier. E.g. SERRPT001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the reporting instructions from the specified employer

> Get links to all pay instructions for the specified employee

*Tags:* `ReportLineInstruction`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Creates a new Reporting Instruction

> Creates a new reporting instruction object

*Tags:* `ReportLineInstruction`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete an Employer revision matching the specified revision number.

> Deletes the specified employer revision for the matching revision number

*Tags:* `Employer`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `RevisionNumber` - _required_ - The revision number. E.g. 1
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the employer by revision number

> Get the employer revision matching the specified revision number

*Tags:* `Employer`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `RevisionNumber` - _required_ - The revision number. E.g. 1
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the employer revisions

> Gets links to all the employer revisions

*Tags:* `Employer`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete the RTI transaction

> Deletes the specified RTI transaction

*Tags:* `RTI`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `RtiTransactionId` - _required_ - The RTI transaction unique identifier. E.g. FPS001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get the RTI transaction

> Returns the specified RTI transaction

*Tags:* `RTI`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `RtiTransactionId` - _required_ - The RTI transaction unique identifier. E.g. FPS001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete RTI transaction tag

> Deletes a tag from the RTI transaction

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `RtiTransactionId` - _required_ - The RTI transaction unique identifier. E.g. FPS001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get RTI transaction tag

> Gets the tag from the RTI transaction

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `RtiTransactionId` - _required_ - The RTI transaction unique identifier. E.g. FPS001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Insert RTI transaction tag

> Inserts a new tag on the RTI transaction

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `RtiTransactionId` - _required_ - The RTI transaction unique identifier. E.g. FPS001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all tags from RTI transaction

> Gets all the tags from the RTI transaction

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `RtiTransactionId` - _required_ - The RTI transaction unique identifier. E.g. FPS001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all RTI transactions for the employer

> Get links for all RTI transactions for the specified employer

*Tags:* `RTI`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get RTI transactions with tag

> Gets the RTI transactions with the tag

*Tags:* `Tagging` `RTI`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all RTI transaction tags

> Gets all the RTI transaction tags

*Tags:* `Tagging` `RTI`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get sub contractors with tag

> Gets the sub contractors with the tag

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete an sub contractor

> Delete the specified sub contractor

*Tags:* `SubContractor`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get sub contractor from employer

> Gets the specified sub contractor from employer.

*Tags:* `SubContractor`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Patches the sub contractor

> Patches the specified sub contractor with the supplied values

*Tags:* `SubContractor`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Updates the sub contractor

> Updates the existing specified sub contractor object

*Tags:* `SubContractor`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get CIS instructions with tag

> Gets the CIS instructions with the tag

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete a CIS instruction

> Delete the specified CIS instruction

*Tags:* `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `CisInstructionId` - _required_ - The CIS instruction unique identifier. E.g. CIS001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get CIS instruction from sub contractor

> Gets the specified CIS instruction from sub contractor.

*Tags:* `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `CisInstructionId` - _required_ - The CIS instruction unique identifier. E.g. CIS001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Patches the CIS instruction

> Update an existing CIS instruction object

*Tags:* `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `CisInstructionId` - _required_ - The CIS instruction unique identifier. E.g. CIS001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Updates the CIS instruction

> Insert or update existing CIS instruction object

*Tags:* `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `CisInstructionId` - _required_ - The CIS instruction unique identifier. E.g. CIS001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete CIS instruction tag

> Deletes a tag from the CIS instruction

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `CisInstructionId` - _required_ - The CIS instruction unique identifier. E.g. CIS001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get CIS instruction tag

> Gets the tag from the CIS instruction

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `CisInstructionId` - _required_ - The CIS instruction unique identifier. E.g. CIS001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Insert CIS instruction tag

> Inserts a new tag on the CIS instruction

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `CisInstructionId` - _required_ - The CIS instruction unique identifier. E.g. CIS001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all tags from the CIS instruction

> Gets all the tags from the CIS instruction

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `CisInstructionId` - _required_ - The CIS instruction unique identifier. E.g. CIS001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get CIS instructions from sub contractor.

> Get links to all CIS instructions for the specified sub contractor.

*Tags:* `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Create a new CIS instruction

> Create a new CIS instruction object

*Tags:* `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get CIS instructions with tag

> Gets the CIS instruction with the tag

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all CIS instruction tags

> Gets all the CIS instruction tags

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get CIS lines with tag

> Gets the CIS lines with the tag

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete a CIS line

> Delete the specified CIS line

*Tags:* `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `CisLineId` - _required_ - The CIS line unique identifier. E.g. CISLN001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get CIS line from sub contractor

> Gets the specified CIS line from sub contractor.

*Tags:* `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `CisLineId` - _required_ - The CIS line unique identifier. E.g. CISLN001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete CIS line tag

> Deletes a tag from the CIS line

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `CisLineId` - _required_ - The CIS line unique identifier. E.g. CISLN001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get CIS line tag

> Gets the tag from the CIS line

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `CisLineId` - _required_ - The CIS line unique identifier. E.g. CISLN001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Insert CIS line tag

> Inserts a new tag on the CIS line

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `CisLineId` - _required_ - The CIS line unique identifier. E.g. CISLN001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all tags from the CIS line

> Gets all the tags from the CIS line

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `CisLineId` - _required_ - The CIS line unique identifier. E.g. CISLN001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get CIS lines from sub contractor.

> Get links to all CIS lines for the specified sub contractor.

*Tags:* `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get CIS lines with tag

> Gets the CIS line with the tag

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all CIS line tags

> Gets all the CIS line tags

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete an SubContractor revision matching the specified revision number.

> Deletes the specified sub contractor revision for the matching revision number

*Tags:* `SubContractor`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `RevisionNumber` - _required_ - The revision number. E.g. 1
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the sub contractor by revision number

> Get the sub contractor revision matching the specified revision number

*Tags:* `SubContractor`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `RevisionNumber` - _required_ - The revision number. E.g. 1
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all sub contractor revisions

> Gets links to all the sub contractor revisions

*Tags:* `SubContractor`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete sub contractor tag

> Deletes a tag from the sub contractor

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get sub contractor tag

> Gets the tag from the sub contractor

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Insert sub contractor tag

> Inserts a new tag on the sub contractor

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get sub contractor revision tag

> Gets the tag from the sub contractor revision

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `EffectiveDate` - _required_ - The effective date to be applied. E.g 2016-04-06
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all tags from the sub contractor

> Gets all the tags from the sub contractor

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all sub contractor revision tags

> Gets all the tags from the sub contractor revision

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `EffectiveDate` - _required_ - The effective date to be applied. E.g 2016-04-06
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete an sub contractor revision matching the specified revision date.

> Deletes the specified sub contractor revision for the matching revision date

*Tags:* `SubContractor`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `EffectiveDate` - _required_ - The effective date to be applied. E.g 2016-04-06
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get sub contractor by effective date.

> Returns the sub contractor's state at the specified effective date.

*Tags:* `SubContractor`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `SubContractorId` - _required_ - The sub contractors' unique identifier. E.g SUB001
* `EffectiveDate` - _required_ - The effective date to be applied. E.g 2016-04-06
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get sub contractors from employer.

> Get links to all sub contractors for the specified employer.

*Tags:* `SubContractor`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Create a new sub contractor

> Create a new sub contractor object

*Tags:* `SubContractor`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get sub contractors with tag

> Gets the sub contractor with the tag

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all sub contractor tags

> Gets all the sub contractor tags

*Tags:* `Tagging` `CIS`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get sub contractors from employer at a given effective date.

> Get links to all sub contractors for the employer on specified effective date.

*Tags:* `SubContractor`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EffectiveDate` - _required_ - The effective date to be applied. E.g 2016-04-06
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete employer tag

> Deletes a tag from the employer

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get employer tag

> Gets the tag from the employer

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Insert employer tag

> Inserts a new tag on the employer

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get employer revision tag

> Gets the tag from the employer revision

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `EffectiveDate` - _required_ - The effective date to be applied. E.g 2016-04-06
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all employer tags

> Gets all the tags from the employer

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all employer revision tags

> Gets all the tags from the employer revision

*Tags:* `Tagging`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EffectiveDate` - _required_ - The effective date to be applied. E.g 2016-04-06
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete an Employer revision matching the specified revision date.

> Deletes the specified employer revision for the matching revision date

*Tags:* `Employer`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EffectiveDate` - _required_ - The effective date to be applied. E.g 2016-04-06
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets the employer at the specified effective

> Returns the employer's state at the specified effective date.

*Tags:* `Employer`

#### Input Parameters
* `EmployerId` - _required_ - The employers' unique identifier. E.g ER001
* `EffectiveDate` - _required_ - The effective date to be applied. E.g 2016-04-06
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets all employers

> Gets links to all employers contained under the authorised application scope

*Tags:* `Employer`

#### Input Parameters
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Create a new Employer

> Create a new employer object

*Tags:* `Employer`

#### Input Parameters
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get employers with tag

> Gets the employers with the tag

*Tags:* `Tagging` `Employer`

#### Input Parameters
* `TagId` - _required_ - The tag unique identifier. E.g. MyTag
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all employer tags

> Gets all the employer tags

*Tags:* `Tagging` `Employer`

#### Input Parameters
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets all employers at the specified effective date

> Gets links to all employers contained under the authorised application scope for the specified effective date.

*Tags:* `Employer`

#### Input Parameters
* `EffectiveDate` - _required_ - The effective date to be applied. E.g 2016-04-06
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get health check status

> Returns the health status of the application

*Tags:* `Healthcheck`

### Get all Batch jobs

> Gets all the Batch jobs

*Tags:* `Jobs`

#### Input Parameters
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Create new Batch job

> Adds a new Batch job to the queue and returns the job info

*Tags:* `Jobs`

#### Input Parameters
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete the Batch job

> Deletes the the Batch job

*Tags:* `Jobs`

#### Input Parameters
* `JobId` - _required_ - The job unique identifier.
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get the Batch job information

> Return the the Batch job information

*Tags:* `Jobs`

#### Input Parameters
* `JobId` - _required_ - The job unique identifier.
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get the Batch job progress

> Return the the Batch job progress

*Tags:* `Jobs`

#### Input Parameters
* `JobId` - _required_ - The job unique identifier.
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get the Batch job status

> Return the the Batch job status

*Tags:* `Jobs`

#### Input Parameters
* `JobId` - _required_ - The job unique identifier.
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all CIS jobs

> Gets all the CIS jobs

*Tags:* `Jobs`

#### Input Parameters
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Create new CIS job

> Adds a new CIS job to the queue and returns the job info

*Tags:* `Jobs`

#### Input Parameters
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete the CIS job

> Deletes the the CIS job

*Tags:* `Jobs`

#### Input Parameters
* `JobId` - _required_ - The job unique identifier.
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get the CIS job information

> Return the the CIS job information

*Tags:* `Jobs`

#### Input Parameters
* `JobId` - _required_ - The job unique identifier.
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get the CIS job progress

> Return the the CIS job progress

*Tags:* `Jobs`

#### Input Parameters
* `JobId` - _required_ - The job unique identifier.
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get the CIS job status

> Return the the CIS job status

*Tags:* `Jobs`

#### Input Parameters
* `JobId` - _required_ - The job unique identifier.
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all DPS jobs

> Gets all the DPS jobs

*Tags:* `Jobs`

#### Input Parameters
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Create new DPS job

> Creates the new DPS job to the queue and returns the job info

*Tags:* `Jobs`

#### Input Parameters
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete the DPS job

> Deletes the the DPS job

*Tags:* `Jobs`

#### Input Parameters
* `JobId` - _required_ - The job unique identifier.
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get the DPS job information

> Return the the DPS job information

*Tags:* `Jobs`

#### Input Parameters
* `JobId` - _required_ - The job unique identifier.
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get the DPS job progress

> Return the the DPS job progress

*Tags:* `Jobs`

#### Input Parameters
* `JobId` - _required_ - The job unique identifier.
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get the DPS job status

> Return the the DPS job status

*Tags:* `Jobs`

#### Input Parameters
* `JobId` - _required_ - The job unique identifier.
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all PayRun jobs

> Gets all the pay run jobs

*Tags:* `Jobs`

#### Input Parameters
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Create new PayRun job

> Creates the new pay run job to the queue and returns the job info

*Tags:* `Jobs`

#### Input Parameters
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete the pay run job

> Deletes the the payrun job

*Tags:* `Jobs`

#### Input Parameters
* `JobId` - _required_ - The job unique identifier.
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get the pay run job information

> Return the the payrun job information

*Tags:* `Jobs`

#### Input Parameters
* `JobId` - _required_ - The job unique identifier.
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get the pay run job progress

> Return the the payrun job progress

*Tags:* `Jobs`

#### Input Parameters
* `JobId` - _required_ - The job unique identifier.
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get the pay run job status

> Return the the payrun job status

*Tags:* `Jobs`

#### Input Parameters
* `JobId` - _required_ - The job unique identifier.
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get all RTI jobs

> Gets all the RTI jobs

*Tags:* `Jobs`

#### Input Parameters
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Create new RTI job

> Creates the new RTI job to the queue and returns the job info

*Tags:* `Jobs`

#### Input Parameters
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Delete the RTI job

> Deletes the the RTI job

*Tags:* `Jobs`

#### Input Parameters
* `JobId` - _required_ - The job unique identifier.
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get the RTI job information

> Return the the RTI job information

*Tags:* `Jobs`

#### Input Parameters
* `JobId` - _required_ - The job unique identifier.
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get the RTI job progress

> Return the the RTI job progress

*Tags:* `Jobs`

#### Input Parameters
* `JobId` - _required_ - The job unique identifier.
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get the RTI job status

> Return the the RTI job status

*Tags:* `Jobs`

#### Input Parameters
* `JobId` - _required_ - The job unique identifier.
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get the query result

> Get the results for the specified query

*Tags:* `Query`

#### Input Parameters
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Runs the active pay instructions report

> Returns the result of the executed active pay instructions report for the given query parameters

*Tags:* `Reports`

#### Input Parameters
* `EmployerKey` - _required_ - The employer unique key. E.g. ER001
* `EmployeeKey` - _required_ - The employee unique key. E.g. EE001
* `ActiveOn` - _optional_ - The active date to consider. E.g 2017-04-05
* `FromDate` - _required_ - The lower filter date. E.g 2016-04-06
* `ToDate` - _optional_ - The upper filter date. E.g 2017-04-05
* `Type` - _optional_ - the data type to filter on. E.g. TaxPayInstruction
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Runs the AOE liability report

> Returns the result of the executed AOE liability report for the given query parameters

*Tags:* `Reports`

#### Input Parameters
* `EmployerKey` - _required_ - The employer unique key. E.g. ER001
* `PayScheduleKey` - _required_ - The pay schedule unique key. E.g. SCH001
* `TaxYear` - _required_ - The tax year. E.g. 2017 = 2017/18 year.
* `TaxPeriod` - _optional_ - The tax period number.
* `TransformDefinitionKey` - _optional_ - The transform definition unique key. E.g. P45-Pdf
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Runs the DPS message report

> Returns the result of the executed DPS message report for the given query parameters

*Tags:* `Reports`

#### Input Parameters
* `EmployerKey` - _required_ - The employer unique key. E.g. ER001
* `FromDate` - _required_ - The lower filter date. E.g 2016-04-06
* `ToDate` - _optional_ - The upper filter date. E.g 2017-04-05
* `MessageTypes` - _optional_ - The DPS message types as a CSV list. E.g. P6,P9,SL1,SL2
* `MessageStatuses` - _optional_ - The DPS message status as a CSV list. E.g. Retrieved,Processed,Blocked,Ignored
* `StartIndex` - _optional_ - The element index to begin the report. Used to control paging within large data sets. E.g. 1
* `MaxIndex` - _optional_ - The highest element index to return from the report. Used to control paging within large data sets. E.g. 100
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Runs the gross to net report

> Returns the result of the executed gross to net report for the given query parameters

*Tags:* `Reports`

#### Input Parameters
* `EmployerKey` - _required_ - The employer unique key. E.g. ER001
* `PayScheduleKey` - _required_ - The pay schedule unique key. E.g. SCH001
* `TaxYear` - _required_ - The tax year. E.g. 2017 = 2017/18 year.
* `TaxPeriod` - _optional_ - The tax period number.
* `StartIndex` - _optional_ - The element index to begin the report. Used to control paging within large data sets. E.g. 1
* `MaxIndex` - _optional_ - The highest element index to return from the report. Used to control paging within large data sets. E.g. 100
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Runs the holiday balance report

> Returns the result of the executed holiday balance report for the given query parameters

*Tags:* `Reports`

#### Input Parameters
* `EmployerKey` - _required_ - The employer unique key. E.g. ER001
* `HolidayYearEnd` - _required_ - The holiday year end for the report. E.g. 2018-12-31
* `EmployeeCodes` - _optional_ - A comma separated list of the employee codes. E.g. EMP001,EMP002
* `StartIndex` - _optional_ - The element index to begin the report. Used to control paging within large data sets. E.g. 1
* `MaxIndex` - _optional_ - The highest element index to return from the report. Used to control paging within large data sets. E.g. 100
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Runs the last pay date report

> Returns the result of the executed last pay date report for the given query parameters

*Tags:* `Reports`

#### Input Parameters
* `EmployerKey` - _required_ - The employer unique key. E.g. ER001
* `OptEmployeeKey` - _optional_ - The optional employee unique key. E.g. EE001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Runs the net pay report

> Returns the result of the executed net pay report for the given query parameters

*Tags:* `Reports`

#### Input Parameters
* `EmployerKey` - _required_ - The employer unique key. E.g. ER001
* `PayScheduleKey` - _required_ - The pay schedule unique key. E.g. SCH001
* `TaxYear` - _required_ - The tax year. E.g. 2017 = 2017/18 year.
* `TaxPeriod` - _optional_ - The tax period number.
* `StartIndex` - _optional_ - The element index to begin the report. Used to control paging within large data sets. E.g. 1
* `MaxIndex` - _optional_ - The highest element index to return from the report. Used to control paging within large data sets. E.g. 100
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Runs the next pay period report

> Returns the result of the executed next pay period report for the given query parameters

*Tags:* `Reports`

#### Input Parameters
* `EmployerKey` - _required_ - The employer unique key. E.g. ER001
* `PayScheduleKey` - _required_ - The pay schedule unique key. E.g. SCH001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Runs the P11 summary report

> Returns the result of the executed P11 summary report for the given query parameters

*Tags:* `Reports`

#### Input Parameters
* `EmployerKey` - _required_ - The employer unique key. E.g. ER001
* `PayScheduleKey` - _required_ - The pay schedule unique key. E.g. SCH001
* `TaxYear` - _required_ - The tax year. E.g. 2017 = 2017/18 year.
* `StartIndex` - _optional_ - The element index to begin the report. Used to control paging within large data sets. E.g. 1
* `MaxIndex` - _optional_ - The highest element index to return from the report. Used to control paging within large data sets. E.g. 100
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Runs the P32 report

> Returns the result of the executed P32 report for the given query parameters

*Tags:* `Reports`

#### Input Parameters
* `EmployerKey` - _required_ - The employer unique key. E.g. ER001
* `TaxYear` - _required_ - The tax year. E.g. 2017 = 2017/18 year.
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Runs the P32 summary report

> Returns the result of the executed P32 summary report for the given query parameters

*Tags:* `Reports`

#### Input Parameters
* `EmployerKey` - _required_ - The employer unique key. E.g. ER001
* `TaxYear` - _required_ - The tax year. E.g. 2017 = 2017/18 year.
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Runs the P45 report

> Returns the result of the executed P45 report for the given query parameters

*Tags:* `Reports`

#### Input Parameters
* `EmployerKey` - _required_ - The employer unique key. E.g. ER001
* `EmployeeKey` - _required_ - The employee unique key. E.g. EE001
* `TransformDefinitionKey` - _optional_ - The transform definition unique key. E.g. P45-Pdf
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Runs the P60 report

> Returns the result of the executed P60 report for the given query parameters

*Tags:* `Reports`

#### Input Parameters
* `EmployerKey` - _required_ - The employer unique key. E.g. ER001
* `TaxYear` - _required_ - The tax year. E.g. 2017 = 2017/18 year.
* `EmployeeCodes` - _optional_ - A comma separated list of the employee codes. E.g. EMP001,EMP002
* `TransformDefinitionKey` - _optional_ - The transform definition unique key. E.g. P45-Pdf
* `StartIndex` - _optional_ - The element index to begin the report. Used to control paging within large data sets. E.g. 1
* `MaxIndex` - _optional_ - The highest element index to return from the report. Used to control paging within large data sets. E.g. 100
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Runs the Pay Dashboard payslips report

> Returns the result of the executed Pay Dashboard payslip report for the given query parameters. See https://api.paydashboard.com for details. For compatability should be returned as JSON with TransformDefinitionKey=Json-Clean.

*Tags:* `Reports`

#### Input Parameters
* `EmployerKey` - _required_ - The employer unique key. E.g. ER001
* `PayScheduleKey` - _required_ - The pay schedule unique key. E.g. SCH001
* `TaxYear` - _required_ - The tax year. E.g. 2017 = 2017/18 year.
* `EmployeeCodes` - _optional_ - A comma separated list of the employee codes. E.g. EMP001,EMP002
* `TransformDefinitionKey` - _optional_ - The transform definition unique key. E.g. P45-Pdf
* `StartIndex` - _optional_ - The element index to begin the report. Used to control paging within large data sets. E.g. 1
* `MaxIndex` - _optional_ - The highest element index to return from the report. Used to control paging within large data sets. E.g. 100
* `PaymentDate` - _optional_ - The payment date context for the report. E.g. 2018-04-30
* `PublicationDate` - _required_ - Specific to the Pay Dashboard report, allows the specification of a future payslip publication date. E.g. 2018-12-31
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Runs the verbose payslip report

> Returns the result of the executed verbose payslip report for the given query parameters

*Tags:* `Reports`

#### Input Parameters
* `EmployerKey` - _required_ - The employer unique key. E.g. ER001
* `PayScheduleKey` - _required_ - The pay schedule unique key. E.g. SCH001
* `TaxYear` - _required_ - The tax year. E.g. 2017 = 2017/18 year.
* `EmployeeCodes` - _optional_ - A comma separated list of the employee codes. E.g. EMP001,EMP002
* `TransformDefinitionKey` - _optional_ - The transform definition unique key. E.g. P45-Pdf
* `StartIndex` - _optional_ - The element index to begin the report. Used to control paging within large data sets. E.g. 1
* `MaxIndex` - _optional_ - The highest element index to return from the report. Used to control paging within large data sets. E.g. 100
* `PaymentDate` - _optional_ - The payment date context for the report. E.g. 2018-04-30
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Runs the pension liability report

> Returns the result of the executed pension liability report for the given query parameters

*Tags:* `Reports`

#### Input Parameters
* `EmployerKey` - _required_ - The employer unique key. E.g. ER001
* `TaxYear` - _required_ - The tax year. E.g. 2017 = 2017/18 year.
* `PensionKey` - _required_ - The pension scheme unique key. E.g. PENSCH001
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Deletes a report definition

> Delete the specified report definition

*Tags:* `Reports`

#### Input Parameters
* `ReportDefinitionId` - _required_ - The report definition unique identifier.
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get the report definition

> Returns the specified report definition from the authroised application

*Tags:* `Reports`

#### Input Parameters
* `ReportDefinitionId` - _required_ - The report definition unique identifier.
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Updates a report definition

> Updates the existing specified report definition object

*Tags:* `Reports`

#### Input Parameters
* `ReportDefinitionId` - _required_ - The report definition unique identifier.
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Runs the specified report definition

> Returns the result of the executed report definition

*Tags:* `Reports`

#### Input Parameters
* `ReportDefinitionId` - _required_ - The report definition unique identifier.
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets all reports

> Get links to all saved report definitions under authorised application

*Tags:* `Reports`

#### Input Parameters
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Create a new report definition

> Creates a new report defintion object

*Tags:* `Reports`

#### Input Parameters
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get a list of all available schemas

> Returns a collection of links to all the available data object schemas

*Tags:* `Schemas`

#### Input Parameters
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get XSD schema

> Returns the XSD schema for the specified data type

*Tags:* `Schemas`

#### Input Parameters
* `DtoDataType` - _required_ - The data transfer object type name. E.g PensionPayInstruction
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get the object template

> Returns a template instance of the specified data type

*Tags:* `Templates`

#### Input Parameters
* `DtoDataType` - _required_ - The data transfer object type name. E.g PensionPayInstruction
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get a list of all available data object tempaltes

> Returns a collection of links to all the available data object templates

*Tags:* `Templates`

#### Input Parameters
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Deletes a transform definition

> Delete the specified transform definition

*Tags:* `Reports`

#### Input Parameters
* `TransformDefinitionId` - _required_ - The transform definition unique identifier.
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Get the transform definition

> Returns the specified transform definition from the authroised application

*Tags:* `Reports`

#### Input Parameters
* `TransformDefinitionId` - _required_ - The transform definition unique identifier.
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Updates a transform definition

> Updates the existing specified transform definition object

*Tags:* `Reports`

#### Input Parameters
* `TransformDefinitionId` - _required_ - The transform definition unique identifier.
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Gets all transform definitions

> Get links to all saved transform definitions under authorised application

*Tags:* `Reports`

#### Input Parameters
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

### Create a new transform definition

> Creates a new transform defintion object

*Tags:* `Reports`

#### Input Parameters
* `Authorization` - _required_ - The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
* `Api-Version` - _required_ - The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

## License

**flow**ground :- Telekom iPaaS / payrun-io-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
