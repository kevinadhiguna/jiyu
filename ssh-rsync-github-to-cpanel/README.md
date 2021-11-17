## 🤔 Problems..

Sometimes, **Cpanel ignores GitHub integration** if a directory such as `public_html` is already occupied. 
<br />

- Nevertheless, uploading files such as `view_login.php` one-by-one, that contains updates is not a good practice, in my opinion.
- Another way is to copy the backup of all directories and files, then push all of them in a single repository in GitHub. Although this might be one of the simplest way, I reckon this is time-consuming and quite risky.

<br />

## 💡 Proposed solution

I believe one of the quickest and safest solution to this is **to utilize SSH and Rsync through a workflow** such as GitHub workflows in GitHub and GitLab CI in GitLab. 

<br />

To be able to access webserver, one needs Secure Shell which is well-known as SSH (More: [What is SSH ? - by Search Target](https://searchsecurity.techtarget.com/definition/Secure-Shell)).
<br />
In addition, Rsync is a tool that synchronizes a remote and local file, according to [DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-use-rsync-to-sync-local-and-remote-directories).

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

8. Click the **View/Download** text in the private key row. Download and place it to a secure place.

<br />

It looks like this :
```
-----BEGIN RSA PRIVATE KEY-----
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
YjdjNTllYTY5GQID
-----END RSA PRIVATE KEY-----
```

Please do not share your private key so that the server won't be compromised easily.
<br />
Converting to `.ppk` format is **NOT mandatory** :

<img src="https://github.com/kevinadhiguna/jiyu/blob/master/ssh-rsync-github-to-cpanel/assets/cpanel-ssh-convert-to-ppk.png" />

<br />

9. I assume you already have a GiHub repository. Otherwise, please create it and upload your files into the repository.

<br />

10. Go to your repository and click the **Action** tab. This time, we will set up our own workflow so just click the text like in the image below.

<img src="https://github.com/kevinadhiguna/jiyu/blob/master/ssh-rsync-github-to-cpanel/assets/github-set-github-actions.png" />

<br />

After clicked, you will see something like this. GitHub workflow is powered by `.yml` file.

<img src="https://github.com/kevinadhiguna/jiyu/blob/master/ssh-rsync-github-to-cpanel/assets/github-set-github-actions-1.png" />

<br />

11. On the right side of your screen, you see a marketplace. Some people provide templates for workflows. Search **rsync** as our GitHub workflows is powered by Rsync and SSH.

<img src="https://github.com/kevinadhiguna/jiyu/blob/master/ssh-rsync-github-to-cpanel/assets/github-set-github-actions-2.png" />

<br />

Let's shoose [Rsync Deployments Action](https://github.com/Burnett01/rsync-deployments) by [Burnett01](https://github.com/Burnett01).

<img src="https://github.com/kevinadhiguna/jiyu/blob/master/ssh-rsync-github-to-cpanel/assets/github-set-github-actions-3.png" />

<br />

12. Copy the template by clicking the copy icon.

<img src="https://github.com/kevinadhiguna/jiyu/blob/master/ssh-rsync-github-to-cpanel/assets/github-set-github-actions-4.png" />

<br />

Paste it to your `.yml` (such as `main.yml`) file. It looks like this :

```yml
# This is a basic workflow to help you get started with Actions

name: CI

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the dev branch
  push:
    branches: [ dev ]
  pull_request:
    branches: [ dev ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v2

      - name: Rsync Deployments Action
      # You may pin to the exact commit or the version.
      # uses: Burnett01/rsync-deployments@b943ffe476f772c90f0199d1a180f068f0206e87
      - uses: Burnett01/rsync-deployments@5.1
        with:
          # The switches
          switches: 
          # The remote shell argument
          rsh: # optional, default is 
          # The local path
          path: # optional, default is 
          # The remote path
          remote_path: 
          # The remote host
          remote_host: 
          # The remote port
          remote_port: # optional, default is 22
          # The remote user
          remote_user: 
          # The remote key
          remote_key: 
          # The remote key passphrase
          remote_key_pass: # optional, default is 
```

You might see wavy red lines that say `This value cannot be null` but it's ok. We will fix them later.

<br />

13. It's time to edit the `main.yml` file. Let's edit the name first. Editing name is optional. It will the one that is red-lined in the image below.

<img src="https://github.com/kevinadhiguna/jiyu/blob/master/ssh-rsync-github-to-cpanel/assets/github-set-github-actions-6.png" />

<br />

Let's change it to `rsync-ssh deployment` (feel free to name it whatever you want) :
```diff
- name: CI
+ name: rsync-ssh deployment
```

<br />

Assuming your current branch is `dev`, actually there's nothing much to be changed here :
```yml
# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the dev branch
  push:
    branches: [ dev ]
  pull_request:
    branches: [ dev ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:
```

However, if your current/target branch is `master`, you need to change `dev` to `master` like this :
```yml
# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the master branch
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:
```

<br />

Next, we will edit what we copied from the template :
```yml
- name: Rsync Deployments Action
      # You may pin to the exact commit or the version.
      # uses: Burnett01/rsync-deployments@b943ffe476f772c90f0199d1a180f068f0206e87
      - uses: Burnett01/rsync-deployments@5.1
        with:
          # The switches
          switches: 
          # The remote shell argument
          rsh: # optional, default is 
          # The local path
          path: # optional, default is 
          # The remote path
          remote_path: 
          # The remote host
          remote_host: 
          # The remote port
          remote_port: # optional, default is 22
          # The remote user
          remote_user: 
          # The remote key
          remote_key: 
          # The remote key passphrase
          remote_key_pass: # optional, default is 
```

<br />
<br />

Let's start from `switches`. As [the documentation](https://github.com/Burnett01/rsync-deployments#inputs) says, `switches` indicates any initial/required rsync flags. I would pass some flags decribed below and exclude a couple of directories that are not required by my application to run. Feel free to change it. 
```diff
- switches:
+ switches: -avzh --exclude=".git" --exclude=".github"
```

Some rsync flags (source: [Linuxize](https://linuxize.com/post/how-to-use-rsync-for-local-and-remote-data-transfer-and-synchronization/)) :
`-a` : This option tells rsync to syncs directories recursively. <br />
`-z` : This option forces rsync to compresses the data as it is sent to the destination machine. Use this option only if the connection to the remote machine is slow.
`-v` : Verbose output (logs).
`-h` : Make the output/logs into human-readable format.
`--exclude`: Exclude a file. For instance: `--exclude="README.md"` will exclude README.md from being synced.

<br />
<br />

I do not want to execute any other commands, so I will comment out the `rsh` part as it is optional as well.
```diff
- rsh: # optional, default is 
+ #rsh:
```

<br />
<br />

Set up the local path. `/` indicates your branch's root directory. 
```diff
- path: # optional, default is
+ path: / 
```

<br />
<br />

Next thing is to set the remote path. Let's say your Cpanel username is `johndoe` and you want to sync into `public_html` directory. Then you are able to modify it like this :
```diff
- remote_path:
+ remote_path: /home/johndoe/public_html 
```

<br />
<br />

Remote host is either the IP address of your web server or hostname (e.g. : mywebsite.com). I have not tested using hostname so I 'll just drop an IP address of a  web server (162.134.12.14).
```diff
- remote_host:
+ remote_host: 162.134.12.14
```

<br />
<br />

Setting up `remote_port` can be quite tricky. You should get info whether your hosting provider runs SSH on port 22 (default port) or not. In this scenario, let's assume SSH is served on port 31678. Then change it like below :
```diff
- remote_port: # optional, default is 22
+ remote_port: 31678
```

<br />
<br />

`remote_user` is your username in Cpanel. Previously, we set `remote_path` to `home/johndoe/public_html`. So, `johndoe` is the username and `remote_user` as well.
```diff
- remote_user:
+ remote_user: johndoe
```

<br />
<br />

`remote_key` is filled by the private key generated in Cpanel. At this point, let's just fill it `${{ secret.REMOTE_KEY }}` as it is not secure to put it directly. Basically what we are doing is that we ask GitHub to fetch a repository secret named `REMOTE_KEY`. This will be explained later.
```diff
- remote_key:
+ remote_key: ${{ secret.REMOTE_KEY }}
```

<br />
<br />

`remote_key_pass` is the passphrase we created when generating the public key in Cpanel. This is **noncompulsory**. Again, let's put `${{ secret.REMOTE_KEY_PASS }}` for now as it is not secure to put it directly. GitHub will fetch a repository secret named `REMOTE_KEY_PASS` when GitHub workflows run.
```diff
- remote_key_pass: # optional, default is
+ remote_key_pass: ${{ secret.REMOTE_KEY_PASS }}
```

<br />
<br />

Eventually, the `main.yml` looks like this :

```yml
# This is a basic workflow to help you get started with Actions

name: rsync-ssh deployment

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the dev branch
  push:
    branches: [ dev ]
  pull_request:
    branches: [ dev ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v2

      - name: Rsync Deployments Action
      # You may pin to the exact commit or the version.
      # uses: Burnett01/rsync-deployments@b943ffe476f772c90f0199d1a180f068f0206e87
      - uses: Burnett01/rsync-deployments@5.1
        with:
          # The switches
          switches: -avzh --exclude=".git" --exclude=".github"
          # The remote shell argument
          #rsh: # optional, default is 
          # The local path
          path: /
          # The remote path
          remote_path: /home/johndoe/public_html
          # The remote host
          remote_host: 162.134.12.14
          # The remote port
          remote_port: 31678
          # The remote user
          remote_user: johndoe
          # The remote key
          remote_key: ${{ secret.REMOTE_KEY }}
          # The remote key passphrase
          remote_key_pass: ${{ secret.REMOTE_KEY_PASS }}
```

<br />

14. Before committing the file, open **Settings** in a new tab to configure repository secret. Click **Secret** in the left menu and click the **New repository secret** button.

<img src="https://github.com/kevinadhiguna/jiyu/blob/master/ssh-rsync-github-to-cpanel/assets/github-set-github-actions-8.png" />

<br />

15. Let's add `REMOTE_KEY` as an example.

<img src="https://github.com/kevinadhiguna/jiyu/blob/master/ssh-rsync-github-to-cpanel/assets/github-set-github-actions-9.png" />

<br />

If you did so, let's put other variables' values into repository secret as well. At the end, you would have secrets like this :

<img src="https://github.com/kevinadhiguna/jiyu/blob/master/ssh-rsync-github-to-cpanel/assets/github-set-github-actions-10.png" />

<br />

15. Back to the previous tab where you edit `main.yml` to edit it again like this (just to fetch some variables' values from repository secret) :

```yml
# This is a basic workflow to help you get started with Actions

name: rsync-ssh deployment

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the dev branch
  push:
    branches: [ dev ]
  pull_request:
    branches: [ dev ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v2

      - name: Rsync Deployments Action
      # You may pin to the exact commit or the version.
      # uses: Burnett01/rsync-deployments@b943ffe476f772c90f0199d1a180f068f0206e87
      - uses: Burnett01/rsync-deployments@5.1
        with:
          # The switches
          switches: -avzh --exclude=".git" --exclude=".github"
          # The remote shell argument
          #rsh: # optional, default is 
          # The local path
          path: /
          # The remote path
          remote_path: ${{ secret.REMOTE_PATH }}
          # The remote host
          remote_host: ${{ secret.REMOTE_HOST }}
          # The remote port
          remote_port: ${{ secret.REMOTE_PORT }}
          # The remote user
          remote_user: ${{ secret.REMOTE_USER }}
          # The remote key
          remote_key: ${{ secret.REMOTE_KEY }}
          # The remote key passphrase
          remote_key_pass: ${{ secret.REMOTE_KEY_PASS }}
```

<br />

16. Click the **Start commit** button so it will be pushed to your branch and automatically run GitHub workflows.

<img src="https://github.com/kevinadhiguna/jiyu/blob/master/ssh-rsync-github-to-cpanel/assets/github-set-github-actions-7.png" />

<br />

Thank you for reading, have a nice day !

<!--
In the image above, I propose a new branch named **dev-workflows-patch** but it is not a must. You can directly push to your current branch as well although I would suggest to push into a new branch to test GitHub workflows.
-->
