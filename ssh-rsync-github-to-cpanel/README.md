## 🤔 Problems..

Sometimes, **Cpanel ignores GitHub integration** if a directory such as `public_html` is already occupied. 
<br />

- Nevertheless, uploading files such as `view_login.php` one-by-one, that contains updates is not a good practice, in my opinion.
- Another way is to copy the backup of all directories and files, then push all of them in a single repository in GitHub. Although this might be one of the simplest way, I reckon this is time-consuming and quite risky.

<br />

## 💡 Proposed solution

I believe one of the quickest and safest solution to this is **to utilize SSH and Rsync through a workflow** such as GitHub workflows in GitHub and GitLab CI in GitLab.

<br />

## 🧑🏻‍🔧 Steps :

1. Log in to access Cpanel :

<img src="https://github.com/kevinadhiguna/jiyu/blob/master/ssh-rsync-github-to-cpanel/assets/cpanel.png" />

<br />

2. Search for SSH :

<img src="https://github.com/kevinadhiguna/jiyu/blob/master/ssh-rsync-github-to-cpanel/assets/cpanel-ssh.png" />

<br />

3. If you don't have a key, you can generate it by clicking the "Generate Key" button. Otherwise you are allowed to import your keys.

<img src="https://github.com/kevinadhiguna/jiyu/blob/master/ssh-rsync-github-to-cpanel/assets/cpanel-ssh-generate-key-button.png" />

<br />

4. Fill in the columns and generate your public key. Also, ensure that you have secured your SSH key passphrase.

<img src ="https://github.com/kevinadhiguna/jiyu/blob/master/ssh-rsync-github-to-cpanel/assets/cpanel-generate-key-page.png" />

<br />

5. To be able to use it, change the authorization status from **unauthorized** to **authorized**. You can do so by clicking the **manage** button in the public key row.

<img src="https://github.com/kevinadhiguna/jiyu/blob/master/ssh-rsync-github-to-cpanel/assets/cpanel-ssh-authorize-key-1.png" />

6. Make sure you have authorized it.

<img src="https://github.com/kevinadhiguna/jiyu/blob/master/ssh-rsync-github-to-cpanel/assets/cpanel-ssh-authorize-key-2.png" />

<br />

7. Go back and check the authorization status. Make sure it is **authorized**.

<img src="https://github.com/kevinadhiguna/jiyu/blob/master/ssh-rsync-github-to-cpanel/assets/cpanel-ssh-authorize-key-3.png" />

<br />

To be able to access webserver, one needs Secure Shell which is well-known as SSH (More: [What is SSH ? - by Search Target](https://searchsecurity.techtarget.com/definition/Secure-Shell)).
