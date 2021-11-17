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

8. Click the **View/Download** text in the private key row. Download and place it to a secure place.

<br />

It looks like this :
```
-----BEGIN RSA PRIVATE KEY-----
b3BlbnNzaJ1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABlwAAAAdzc2gtcn
NhAAAAAwEAAQAAAYEAxlJ58oi4lmffC7qcv0jj+4riQppxAXysCf61SvuCc2qn/TAv5sge
oSY9Nft0i99EuoMA5WtYg3NVr2dk+WVh8HxNCoPVERfila04BdeXvvmucuqoQqCINrebGM
Q0TnyUosuB+/Rqs55HZih5IIg8tkoLYhKJ+mTksvKMfFGpM+Pi5Lj1Z9z70ISdY32PKeej
+U2kfR/jw/okQDs67WiF3itHPbkCrIUG8Rc5XXEdgrfOrvveY/yrIsItIwURh+98gMd00A
ut4bYOGQe5nvJ3kYsjpEUzMCAxBSS67Clx+klWNfDbdD2VYnafMhNa3+iKBr/Wj4Jy3yBI
i+HuC4b+GR1CRf6jBr4xS/wDx7pgwqTclGIwaiysMaY2Kp7hVpGGKkPB8xKCT7kBj59gfZ
LZ8d0s5PYQXikBJvKUwkXrc/r8qtR9upZ34ZqM4yhmWlQ+BDo0Zcgorn/2xUyfJbuWUbyL
Ayt87Lokw8jvveJjDdHhS1uVyGqfJ8DSMXpDVtQtAAAFqBRMoFUUTKBVAAAAB3NzaC1yc2
EAAAGBAMZSefKIuJZn3wu6nL9I4/uK4kKacQF8rAn+tUr7gnNqp/0wL+bIHqEmPTX7dIvf
RLqDAOVrWINzVa9nZPllYfB8TQqD1REX4pWtOAXXl775rnLqqEKgiDa3mxjENE58lKLLgf
v0arOeR2YoeSCIPLZKC2ISifpk5LLyjHxRqTPj4uS49Wfc+9CEnWN9jynno/lNpH0f48P6
JEA7Ou1ohd4rRz25AqyFBvEXOV1xHYK3zq773mP8qyLCLSMFEYfvfIDHdNALreG2DhkHuZ
7yd5GLI6RFMzAgMQUkuuwpcfpJVjXw23Q9lWJ2nzITWt/oiga/1o+Cct8gSIvh7guG/hkd
QkX+owa+MUv8A8e6YMKk3JRiMGosrDGmNiqe4VaRhipDwfMSgk+5AY+fYH2S2fHdLOT2EF
4pASbylMJF63P6/KrUfbqWd+GajOMoZlpUPgQ6NGXIKK5/9sVMnyW7llG8iwMrfOy6JMPI
773iYw3R4UtblchqnyfA0jF6Q1bULQAAAAMBAAEAAAGBAKyGSzfF4G5XZh2Z9YoiKtJEe5
hdKjmU70Syo5vbOByXiBQlu0YUiTC/RziSy0xyqiNmm3z46UNRLhUs6RZcL9s5BvxCuzPn
h2GWEspiRswIAM5PfJiZdmXDS9U7uhUdI2CLkURR2BDxfENOqjC207nwp/5lCksdQia6Aa
SUlZFiiZtXm4UDJLy84P4P2F8n9+mEtbdz6nwuOyL1Y8nex6kCFTOIot7ZyrQo8+pp4LY6
mD55NXnd8DKIoSN54UpT9ny5J0dy0qG4iOChu7umTFdndcUkBWjBjGv3HOr7qaZDQtkfyG
huv/uCVEFI0LscAiWNz9Z2AlWyVt54A7N5EkNGRmp5/a7TN/Ic/+Q5CUx1fUMtzEvDob3g
Wwb/UsGznR4jVQUDboQ7TUnlbPPgZjxWXZQ1BgQzunX7zoA0RQjPR41xHsAP3J1q1PQ0yk
AieV9XNuEJxR/b8j/VClrTqjO4+HbueH4Pr5MyplGP5J7JZWFJsGBm4BVv9ptonCPLMQAA
AMEA7fRaW5peZYnXn0qJD7o9hkSlVa7UF+xu5Eha+lR8UEZr50bOubjmQ2JMy+qJpDqIjC
dDhgjA877t9YS8l2EyOxa/qLToZRT6opinpHihASZnMkuJZaM5dTWh84O1yRjqx0DumI6a
bf+3NOrFHaZsTZn403bctebnW5WcD/pW6GzT6lEoJdbJfvck+Sy0krn8zeG5ae3nejVvvX
VmJS1/91bbD3Qe1JoZFdWGnH0g39x7UJm0VV1ljBs+BgKThJVjAAAAwQD8PNqlWwVkC1eq
FlZckoc/aU6BHvYS7Ou8A0D7JgBP280IOQNMGzT1Z2J+faYMDeZ0Dgis9UBfvpy3E88k2k
+UDgGvtBoY2NdzVk6gdQV8wBxgmx5z1OEPuB1CLc4XmHjbGW5noN69X5r/OFizKYCaYMD6
kPeU5REBshTzfXRnVus/B7IWr79AFUWAB2yQ9HS+JXvrIELpzMPrJ1+Kitye9zyAUi3d3H
3o7KrLZXnubA2PERMPVYJy2I+dX9Rgz8sAAADBAMlHwDlD27at4U0ldJXnIdmYjOUahEEu
XKoNFiPXQbyeUDRDG6v0biNfYXg8hTHpxkjtqZWUbpjLIu2K6xp9Kq76e0xzfEyHcA7nVB
8zxAiZAD+ndf+u3L7iCpPxJevEKWkZZI1mTr4l9ACqUWhR2Ko2WLi4f5J+ernVjnbHb4lq
W3i6njF6JKS4XhzEaTacSl7GXTxGIBlKx/doSZx03YP8VrhFIc/Ef7RlSblTX+xqPqn+Kx
lktrQ5euhO/V985wAAAC5naXRwb2RAd3MtYmUwNzNhZmEtNTU5Mi00ODg5LTg4ZmMtM2Iy
YjdjNTllYTY5GQID
-----END RSA PRIVATE KEY-----
```

Please do not share your private key so that the server won't be compromised easily.
<br />
Converting to `.ppk` format is not mandatory :

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

To be able to access webserver, one needs Secure Shell which is well-known as SSH (More: [What is SSH ? - by Search Target](https://searchsecurity.techtarget.com/definition/Secure-Shell)).
