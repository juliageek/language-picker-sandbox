# About the project
The project tries to replicate the structure I have in a bigger project, which is the following:
1. I have both `apostrophe-workflow` and `apostrophe-i18n-static` on the project.
2. I also have a blog module, which extends `apostrophe-blog`, which is not a child of the Home page, (there will multiple blogs in the end).
3. In `layout.html`, I have a language picker, which is a macro. In the macro, I call `apos.workflow.localizations()` to get the locales list. Based on logging I've done, this method returns results on the Home page, but no results on the blog page.


# How to run the project

+ Install npm dependencies: `npm install`
+ Run Docker containers: `docker-compose up`
+ Use the `lang-picker.tar.gz` file to restore the database
+ Run `nodemon` to see it live

# How to reproduce the issue I have
+ In the home page, notice that the languages are populated in the language-picker on the top right side. 
+ Click on the **Blog One** link. Observe that the language-picker has no languages anymore.

