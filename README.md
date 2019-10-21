## Privacy Visualization
Privacy policy visualization became a much more hot topic as the GDPR deadline passes in 2018. The difficulty still lies in the legal semantics used when formulating these policies. We are looking forward to implementing a high-level and basic emoticon representation of privacy policies following the works of Rossi et.al on A Visualization Approach for Adaptive Consent in the European Data Protection Framework and the usable privacy tool birthed by the research of Cherivirala et.al  on Visualization and Interactive Exploration of Data Practices in Privacy Policies.


## Implementation
Our aim is to build a privacy tag generating website where people can come and generate a summary of their privacy policies. We will be making use of the privacy icons from Mozilla for the representation.

![Image](https://wiki.mozilla.org/images/9/96/Picons_full_set.png)
 
| Symbol  | Title |  Definition |
| ------- | -------| ------- |
| N  | Non-Personal Information  | Data is aggregated, anonymized, or purely technical.|
| P	 | Personal Information	    | Data is moderately sensitive and individually linkable.|
| S	 |Sensitive Information	   | Data is highly sensitive or linkable (ex: SSN, CC#, health).|
|E	 |Encrypted	                |All data transmission and storage is encrypted.|
|A	 |Advertising	              |Data is used for advertising or marketing purposes.|
|G	 |Geolocation	              |Location data is collected or used.|
|3rd	| Third Parties	        |  Other entities have access to your data.|
|F	 |Friends' Information	    | Data about your friends or social graph.|
|O	 |Opt-In Consent	        |   Whenever data is collected, you're asked for permission first.|
|30	|30-Day Retention	        | All data is destroyed after 30 days.|
|90|	90-Day Retention	        | All data is destroyed after 90 days.|
|∞	| Unlimited Retention	     | There is no schedule for the destruction of data.|
**Optional**		
|L	 |Law Enforcement	          |Data is only provided under a court order, or to prevent imminent danger to the user.|
|C	 |Certified	                 |An independent party has certified the privacy practices of this app|

## Privacy tag Design
![Image](https://res.cloudinary.com/venuefit-com/image/upload/v1568581168/others/privacy_tag_s7rbnw.png)

The table above shows the final output of what the tag may look like and it will be generated after the user fills in a questionnaire on what their policies is about.
 ## The Questionnaire
#### 1.	Non-Personal Information 
Will you be collecting anonymized, or purely technical data ?
Yes | NO  
Summary  Box (50 words) ----- Link to section
#### 2.	Personal Information	
Will you be collecting personal data which are moderately sensitive and individually linkable for example, name, address  etc. ?
Yes | NO  
Summary Box (50 words) ----- Link to section
#### 3.	Sensitive Information	
Will you be collecting data which are highly sensitive or linkable (ex: SSN, CC#, health)?
Yes | NO  
Summary Box (50 words) ----- Link to section
#### 4.	Encrypted (Here we need to make a not encrypted or partially encrypted icon.)
Are All data transmission and storage encrypted.?
Fully | Partially | Not Encrypted  
Summary Box (50 words) ----- Link to section
#### 5.	Advertising	
Will data collected be used for advertising or marketing purposes?
Fully | Partially | Other | NO
Summary Box (50 words) ----- Link to section
#### 6.	Geolocation	
Are data about user location collected or used?
Yes | NO  
Summary Box (50 words) ----- Link to section
#### 7.	Third Parties	
Will other entities have access to data collected? 
Yes | NO  
Select which data is shared with 3rd party. 		
Summary Box (50 words) ----- Link to section
#### 8.	Friends' Information	
Will the data about user’s friends or social graph be collected or used? 
Yes | NO  
Summary Box (50 words) ----- Link to section
#### 9.	Opt-In Consent	
Whenever data is to be collected, will users be asked for permission first?
Yes | NO  
Summary Box (50 words) ----- Link to section
#### 10.	Retention	
How long will the data be held before it will be destroyed?
30 days | 90 days | Unlimited Retention | Other  
Summary Box (50 words) ----- Link to section
#### 11.	Law Enforcement
User data is only provided under a court order, or to prevent imminent danger to the user.
Yes | NO  
Summary Box (50 words) ----- Link to section
#### 12.	Certified
An independent party has certified the privacy practices of this app.
Yes | NO  
Summary Box (50 words) ----- Link to section


Answering all the questions above will be used to generate an embedded code that users can go paste on their website.



References

## Survey-form Creation
_NOte that this section of this file is only visible in the 'survey-form' branch in this repository_
The form application was built with ReactJS toolchain [create-react-app](https://github.com/facebook/create-react-app)
> Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.

**But you do not need to create a new app since once has been created already**
### Create 'survey-form' branch and pull files
```shell
git branch survey-form
git checkout survey-form
git pull origin survey-form
```

### Install dependencies
```shell
npm install
```

### Start server
```shell
npm start
```
Then enter [http://localhost:3000]() in your browser

### Make your changes, commit them and push to the branch
```shell
git add .
git commit -m "Your commit"
git push -u origin survey-form
```

## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/hackng/privacy-tag/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.


### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/hackng/privacy-tag/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
