
<div align="left" style="position: relative;">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="right" width="30%" style="margin: -20px 0 0 ;">
<h1>DISTRIBUTED-FILE-SYSTEM-DFS</h1>
<p align="left">
	<!-- Shields.io badges disabled, using skill icons. --></p>
<p align="left">Built with the tools and technologies:</p>
<p align="left">
	<p>Node js(Express)</p>
  <p>Python</p>
</p>
</div>
<br clear="right">

<details><summary>Table of Contents</summary>

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
  - [📂 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
  - [☑️ Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
  - [🤖 Usage](#🤖-usage)
  - [🧪 Testing](#🧪-testing)
- [📌 Project Map](#-project-map)
- [🔰 Contributing](#-contributing)
- [🎗 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

</details>
<hr>

## 📍 Overview

The Distributed File System (DFS) is a robust and efficient file management solution designed to distribute, store, and manage files across multiple systems. It provides users with seamless access to files, ensuring scalability, reliability, and high availability.

---

## 👾 Features

-- File Upload and Management: Organize and manage files efficiently across multiple nodes.
-- Chunking and Distribution: Files are divided into chunks and distributed across the system for redundancy and faster retrieval.
-- Fault Tolerance: Ensures data integrity and accessibility even in the event of node failures.
-- Command Line Interface (CLI): A user-friendly CLI executable for file operations such as uploading, downloading, and managing files.
-- Server Integration: A robust backend server handles file requests, authentication, and data coordination.

---

## 📁 Project Structure

```sh
└── Distributed-File-System-dfs/
    ├── README.md
    ├── client
    │   ├── DFS.spec
    │   ├── build
    │   ├── cli
    │   ├── dist
    │   ├── icon.ico
    │   ├── main.py
    │   ├── main.spec
    │   └── requirements.txt
    ├── projectIdea.txt
    └── server
        ├── auth
        ├── config
        ├── core
        ├── func
        ├── index.js
        ├── middleware
        ├── model
        ├── package-lock.json
        ├── package.json
        ├── routes
        └── swagger.js
```


### 📂 Project Index
<details open>
	<summary><b><code>DISTRIBUTED-FILE-SYSTEM-DFS/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/projectIdea.txt'>projectIdea.txt</a></b></td>
				<td>></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- client Submodule -->
	<summary><b>client</b></summary>
	<blockquote>
		<table>
		<tr>
			<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/client/main.py'>main.py</a></b></td>
			<td><code>❯ The main entry point for the DFS CLI, handling user interactions and delegating tasks to respective modules.</code></td>
		</tr>
		<tr>
			<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/client/main.spec'>main.spec</a></b></td>
			<td><code>❯ Configuration for creating an executable of the CLI application using PyInstaller.</code></td>
		</tr>
		<tr>
			<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/client/requirements.txt'>requirements.txt</a></b></td>
			<td><code>❯ Lists the Python dependencies required for the client-side implementation of the DFS.</code></td>
		</tr>
		<tr>
			<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/client/DFS.spec'>DFS.spec</a></b></td>
			<td><code>❯ Advanced PyInstaller specification file for bundling the DFS CLI application.</code></td>
		</tr>
		</table>
		<details>
			<summary><b>cli</b></summary>
			<blockquote>
				<table>
				<tr>
					<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/client/cli/uploadfile.py'>uploadfile.py</a></b></td>
					<td><code>❯ Handles file upload operations, chunking large files, and interacting with the server for storage.</code></td>
				</tr>
				<tr>
					<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/client/cli/downloadfile.py'>downloadfile.py</a></b></td>
					<td><code>❯ Facilitates downloading files from the DFS, reconstructing chunks into the original file.</code></td>
				</tr>
				<tr>
					<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/client/cli/rename.py'>rename.py</a></b></td>
					<td><code>❯ Provides functionality to rename files stored in the DFS.</code></td>
				</tr>
				<tr>
					<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/client/cli/delete.py'>delete.py</a></b></td>
					<td><code>❯ Enables users to delete files from the DFS securely.</code></td>
				</tr>
				<tr>
					<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/client/cli/chunker.py'>chunker.py</a></b></td>
					<td><code>❯ Contains logic for chunking files into smaller pieces and reassembling them during retrieval.</code></td>
				</tr>
				<tr>
					<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/client/cli/register.py'>register.py</a></b></td>
					<td><code>❯ Handles user registration, communicating with the server for account creation.</code></td>
				</tr>
				<tr>
					<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/client/cli/filechecker.py'>filechecker.py</a></b></td>
					<td><code>❯ Verifies file integrity and checks for missing or corrupt chunks.</code></td>
				</tr>
				<tr>
					<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/client/cli/viewFiles.py'>viewFiles.py</a></b></td>
					<td><code>❯ Displays the list of files stored in the DFS for the logged-in user.</code></td>
				</tr>
				<tr>
					<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/client/cli/banner.py'>banner.py</a></b></td>
					<td><code>❯ Displays a custom banner or welcome message when the CLI starts.</code></td>
				</tr>
				<tr>
					<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/client/cli/login.py'>login.py</a></b></td>
					<td><code>❯ Manages user login, including authentication and session handling.</code></td>
				</tr>
				</table>
				<details>
					<summary><b>download_dfs</b></summary>
					<blockquote>
						<table>
						<tr>
							<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/client/cli/download_dfs/projectIdea.txt'>projectIdea.txt</a></b></td>
							<td><code>❯ Documents the initial project idea and core objectives for the DFS system.</code></td>
						</tr>
						</table>
					</blockquote>
				</details>
			</blockquote>
		</details>
	</blockquote>
</details>

<details>
	<summary><b>build</b></summary>
	<blockquote>
		<details>
			<summary><b>DFS</b></summary>
			<blockquote>
				<table>
				<tr>
					<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/client/build/DFS/PKG-00.toc'>PKG-00.toc</a></b></td>
					<td><code>❯ Defines the package structure and metadata for bundling the DFS CLI into an executable.</code></td>
				</tr>
				<tr>
					<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/client/build/DFS/Analysis-00.toc'>Analysis-00.toc</a></b></td>
					<td><code>❯ A table of contents detailing the analysis phase of the PyInstaller build process.</code></td>
				</tr>
				<tr>
					<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/client/build/DFS/EXE-00.toc'>EXE-00.toc</a></b></td>
					<td><code>❯ A table of contents file for the executable creation phase of PyInstaller.</code></td>
				</tr>
				<tr>
					<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/client/build/DFS/DFS.pkg'>DFS.pkg</a></b></td>
					<td><code>❯ Contains the packaged components of the DFS CLI application during the build process.</code></td>
				</tr>
				<tr>
					<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/client/build/DFS/warn-DFS.txt'>warn-DFS.txt</a></b></td>
					<td><code>❯ A log file listing warnings or issues encountered during the PyInstaller build process.</code></td>
				</tr>
				<tr>
					<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/client/build/DFS/xref-DFS.html'>xref-DFS.html</a></b></td>
					<td><code>❯ An HTML file for cross-referencing components and dependencies within the DFS project.</code></td>
				</tr>
				<tr>
					<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/client/build/DFS/PYZ-00.pyz'>PYZ-00.pyz</a></b></td>
					<td><code>❯ The Python bytecode archive containing the compiled scripts and modules for the DFS CLI.</code></td>
				</tr>
				<tr>
					<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/client/build/DFS/PYZ-00.toc'>PYZ-00.toc</a></b></td>
					<td><code>❯ A table of contents file for the Python bytecode archive used in the DFS CLI build.</code></td>
				</tr>
				</table>
			</blockquote>
		</details>
	</blockquote>
</details>

<details> <!-- server Submodule -->
	<summary><b>server</b></summary>
	<blockquote>
		<table>
		<tr>
			<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/server/package-lock.json'>package-lock.json</a></b></td>
			<td><code>❯ Auto-generated file that locks the exact versions of dependencies for consistent builds and installations.</code></td>
		</tr>
		<tr>
			<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/server/swagger.js'>swagger.js</a></b></td>
			<td><code>❯ Configuration and setup for the Swagger API documentation of the DFS server.</code></td>
		</tr>
		<tr>
			<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/server/index.js'>index.js</a></b></td>
			<td><code>❯ The main entry point for the server application, initializing routes, middleware, and core functionality.</code></td>
		</tr>
		<tr>
			<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/server/package.json'>package.json</a></b></td>
			<td><code>❯ Defines the server project's metadata, scripts, dependencies, and configurations.</code></td>
		</tr>
		</table>
		<details>
			<summary><b>model</b></summary>
			<blockquote>
				<table>
				<tr>
					<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/server/model/File.js'>File.js</a></b></td>
					<td><code>❯ Defines the schema and database interactions for file-related data within the DFS.</code></td>
				</tr>
				<tr>
					<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/server/model/Person.js'>Person.js</a></b></td>
					<td><code>❯ Defines the schema and database interactions for user-related data within the DFS.</code></td>
				</tr>
				</table>
			</blockquote>
		</details>
	</blockquote>
</details>

<details>
				<summary><b>func</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/server/func/keyGenerator.js'>keyGenerator.js</a></b></td>
						<td><code>❯ This File gnerates the unique key which will be used as password to access the file </code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>core</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/server/core/findFile.js'>findFile.js</a></b></td>
						<td><code>❯ Express component for Finding the file, Generally used for internal work in CLI</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/server/core/deleteFile.js'>deleteFile.js</a></b></td>
						<td><code>❯ Controller for deleting the file based on hashkey</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/server/core/upload.js'>upload.js</a></b></td>
						<td><code>❯ Upload the file ,takes Filename as params and generates a key using the  Key generator and sends as a response to the user for accessing the file</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/server/core/getAll.js'>getAll.js</a></b></td>
						<td><code>❯ Gets all the file uploaded by the user</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/server/core/renameFile.js'>renameFile.js</a></b></td>
						<td><code>❯ Renames the uploaded file takes params as fielname, new filename and hashkey of that file</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/server/core/download.js'>download.js</a></b></td>
						<td><code>❯ Download the files uploaded by the user and takes params the uniques key</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>config</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/server/config/dbconn.js'>dbconn.js</a></b></td>
						<td><code>❯ MongoDB connection code</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>auth</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/server/auth/auth.js'>auth.js</a></b></td>
						<td><code>❯ Auth Controller</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>routes</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/server/routes/authRoute.js'>authRoute.js</a></b></td>
						<td><code>❯ auth Routes for authentication</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/server/routes/coreRoute.js'>coreRoute.js</a></b></td>
						<td><code>❯ Core Working Routes</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>middleware</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Rohit-Bhetal/Distributed-File-System-dfs/blob/master/server/middleware/verifyToken.js'>verifyToken.js</a></b></td>
						<td><code>❯ Middleware for verifying the token</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---
## 🚀 Getting Started

### ☑️ Prerequisites

Before getting started with Distributed-File-System-dfs, ensure your runtime environment meets the following requirements:

- **Programming Language:** JavaScript,Python
- **Package Manager:** Pip, Npm


### ⚙️ Installation

Install Distributed-File-System-dfs using one of the following methods:

**Build from source:**

1. Clone the Distributed-File-System-dfs repository:
```sh
❯ git clone https://github.com/Rohit-Bhetal/Distributed-File-System-dfs
```

2. Navigate to the project directory:
```sh
❯ cd Distributed-File-System-dfs
```

3. Install the project dependencies:


**Using `pip`** &nbsp; [<img align="center" src="" />]()



**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




### 🤖 Usage
Run Distributed-File-System-dfs using the following command:
**Using `pip`** &nbsp; [<img align="center" src="" />]()



**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```



---
## 📌 Project Map

![image](https://github.com/user-attachments/assets/f761cb43-b7a5-44e0-b269-b2830646742f)

- CLI UI
![image](https://github.com/user-attachments/assets/234ff21b-1224-474d-9465-6720ee0c94f4)


---

## 🔰 Contributing

- **💬 [Join the Discussions](https://github.com/Rohit-Bhetal/Distributed-File-System-dfs)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/Rohit-Bhetal/Distributed-File-System-dfs)**: Submit bugs found or log feature requests for the `Distributed-File-System-dfs` project.
- **💡 [Submit Pull Requests](https://github.com/Rohit-Bhetal/Distributed-File-System-dfs)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/Rohit-Bhetal/Distributed-File-System-dfs
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/Rohit-Bhetal/Distributed-File-System-dfs/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=Rohit-Bhetal/Distributed-File-System-dfs">
   </a>
</p>
</details>

---

## 🙌 Access the Docs/Api and CLI:

<a href='https://distributed-file-system-dfs.onrender.com/api-docs/'>API Docs</a>
Download the exe file from dist

---
