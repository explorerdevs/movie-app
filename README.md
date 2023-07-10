# How to setup the Project

These are first steps to be taken before making contribution to the project

- [How to setup the Project](#how-to-setup-the-project)
  - [Setup Steps](#setup-steps)
    - [Install OR Update **pnpm**](#install-or-update-pnpm)
    - [Clone the Repository](#clone-the-repository)
    - [Create your branch](#create-your-branch)
    - [Starting the Application](#starting-the-application)

## Setup Steps

### Install OR Update **pnpm**

```bash
# On Windows using powershell
iwr https://get.pnpm.io/install.ps1 -useb | iex

# On Linux using cURL
curl -fsSL https://get.pnpm.io/install.sh | sh -

# On Linux using wget
wget -qO- https://get.pnpm.io/install.sh | sh -

# On Macbook using Homebrew
brew install pnpm
```

After installing **pnpm**, check to make sure **pnpm** is avalable on your system by running the folllowing command. It should output the current version of **pnpm** on your system

```bash
pnpm --version # 8.6.6 or above

```

### Clone the Repository

```bash
# HTTPS
git clone git@github.com:explorerdevs/movie-app.git

# SSH
git clone git@github.com:explorerdevs/movie-app.git

```

### Create your branch

```bash
# Step 1: Open the folder in your code editor

# Step 2: Checkout to the dev branch
git checkout dev

# Step 3: Create your branch from the dev branch
git checkout -b your_branch_name

# Step 4: Create the remote origin version of your branch
git push origin -u your_branch_name

```

### Starting the Application

```bash
# On the command line, run pnpm install
pnpm install --prefer-offline

# Step 2: Checkout to the dev branch
pnpm dev
# OR
pnpm run dev

```
