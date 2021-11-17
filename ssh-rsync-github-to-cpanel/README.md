## 🤔 Problems..

Sometimes, Cpanel ignores GitHub integration if a directory such as `public_html` is already occupied. Nevertheless, uploading files such as `view_login.php` one-by-one, that contains updates is not a good practice, in my opinion. Another way is to copy the backup of all directories and files, then push all of them in a single repository in GitHub. Although this might be one of the simplest way, I reckon this is time-consuming and quite risky.

## 💡 Proposed solution

I believe one of the quickest and safest solution to this is to utilize SSH and Rsync through a workflow such as GitHub workflows in GitHub and GitLab CI in GitLab.

## 🧑🏻‍🔧 Steps :

To be able to access webserver, one needs Secure Shell which is well-known as SSH (More: [What is SSH ? - by Search Target](https://searchsecurity.techtarget.com/definition/Secure-Shell)).
