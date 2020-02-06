# flutter_firebase_firestore_crud2a

A new Flutter project.

- [flutter_firebase_firestore_crud2a](#flutterfirebasefirestorecrud2a)
	- [Step 1 Install and Setup Flutter Sdk](#step-1-install-and-setup-flutter-sdk)
		- [For mac user](#for-mac-user)
			- [Update flutter sdk path](#update-flutter-sdk-path)
		- [For windows user](#for-windows-user)
		- [flutter doctor](#flutter-doctor)
	- [Step2 Setup VS Code Editor](#step2-setup-vs-code-editor)
	- [Step2 Create and run flutter App](#step2-create-and-run-flutter-app)
	- [Step3 Folder Structure](#step3-folder-structure)
		- [Create `lib/main.dart`](#create-libmaindart)
		- [Prepare skelton folders and files](#prepare-skelton-folders-and-files)
	- [Step4 Edit `lib/main.dart`](#step4-edit-libmaindart)
	- [Step5 Edit `pages/home_page.dart`](#step5-edit-pageshomepagedart)
		- [Add Drawer widget](#add-drawer-widget)
		- [Routing](#routing)
		- [Final code](#final-code)
	- [Step6 Setup Firebase auth](#step6-setup-firebase-auth)
	- [Step7 Edit Register page](#step7-edit-register-page)
		- [Install `firebase_auth` packages](#install-firebaseauth-packages)
		- [Official example code](#official-example-code)
		- [About Form](#about-form)
		- [Final code](#final-code-1)
		- [Test it](#test-it)
	- [Step8 Login Page](#step8-login-page)
	- [Step9 Change content by user's login state](#step9-change-content-by-users-login-state)
		- [Edit `lib/main.dart`](#edit-libmaindart)
		- [Edit `lib/pages/home_page.dart` to accept properties](#edit-libpageshomepagedart-to-accept-properties)
		- [Separate drawer widgets and change contents by user's login state](#separate-drawer-widgets-and-change-contents-by-users-login-state)
		- [Pass `widget.isAuthenticated` to `home_drawer.dart`](#pass-widgetisauthenticated-to-homedrawerdart)
	- [Step10 Provider Basic](#step10-provider-basic)
		- [Install Provider package](#install-provider-package)
		- [Edit `lib/main.dart` to use Provider](#edit-libmaindart-to-use-provider)
		- [Consume Provided value in `lib/widgets/home_drawer.dart`](#consume-provided-value-in-libwidgetshomedrawerdart)
	- [Step11 Provide **isAuthenticated** state](#step11-provide-isauthenticated-state)
		- [Consume **isAuthenticated** param by using `Provider.of`](#consume-isauthenticated-param-by-using-providerof)
		- [But how to change isAuthenticated value ?](#but-how-to-change-isauthenticated-value)
	- [Step12 ChangeNotifierProvider](#step12-changenotifierprovider)
		- [Replace existing provider code](#replace-existing-provider-code)
		- [Add function to notify Provider's change](#add-function-to-notify-providers-change)
		- [This is troublesome. There is nice way! => StreamProvider](#this-is-troublesome-there-is-nice-way--streamprovider)
	- [Step13 StreamProvider](#step13-streamprovider)
	- [Step14 Recap the flow of state management](#step14-recap-the-flow-of-state-management)
	- [Step15 Create User in Firestore database](#step15-create-user-in-firestore-database)
		- [Why we need to create firestore user? Is firebase authentication user not enough?](#why-we-need-to-create-firestore-user-is-firebase-authentication-user-not-enough)
		- [Install Firestore package](#install-firestore-package)
		- [Store user when they successfully registered.](#store-user-when-they-successfully-registered)
		- [Test Register new account and check it.](#test-register-new-account-and-check-it)
	- [Step16 Create Post](#step16-create-post)
		- [Add FloatingActionButton](#add-floatingactionbutton)
		- [Edit `lib/pages/posts_new_page.dart`](#edit-libpagespostsnewpagedart)
	- [Step17 List Posts in `lib/pages/home_page.dart`](#step17-list-posts-in-libpageshomepagedart)
		- [Add post again to check how **`StreamBuilder`** works](#add-post-again-to-check-how-streambuilder-works)
		- [Navigate to **PostsShowPage**](#navigate-to-postsshowpage)
		- [Create Post model](#create-post-model)
	- [Step18 Show Post Page](#step18-show-post-page)
	- [Step19 My Posts Page](#step19-my-posts-page)
		- [Add **PopupMenuButton** to `lib/pages/my_posts_page.dart`](#add-popupmenubutton-to-libpagesmypostspagedart)
	- [Step20 Delete Post](#step20-delete-post)
	- [Step21 Edit Post Page](#step21-edit-post-page)
		- [Add Navigation to `lib/pages/posts_edit_page.dart`](#add-navigation-to-libpagespostseditpagedart)
		- [Edit `lib/pages/posts_edit_page.dart`](#edit-libpagespostseditpagedart)
		- [Important part of this code](#important-part-of-this-code)
	- [Step22 Firestore security rules (Backend authorization)](#step22-firestore-security-rules-backend-authorization)

## Step22 Firestore security rules (Backend authorization)
https://firebase.google.com/docs/firestore/security/overview
https://firebase.google.com/docs/reference/rules/rules.String

```js
rules_version = '2';

service cloud.firestore {
 match /databases/{database}/documents {
 	match /{path=**}/posts/{post} {
  	allow read: if true;
  }
  
  match /users/{userId} {
    allow read, update, delete: if request.auth.uid == userId;
    allow create: if request.auth.uid != null;
    
    
    // A read rule can be divided into get and list rules
    match /posts/{post} {
      // Applies to single document read requests
      allow get: if request.auth.uid == userId;

      // Applies to queries and collection read requests
      allow list: if request.auth.uid == userId;
    }

      // A write rule can be divided into create, update, and delete rules
    match /posts/{post} {
			// To create post, user must login,
      // Title required
      // Content require
      allow create: if request.auth.uid != null
      							&& request.resource.data.title.size() > 0;

      // Applies to writes to existing documents
      allow update: if request.auth.uid == userId
                    && request.resource.data.title.size() > 0;

      // Applies to delete operations
      allow delete: if request.auth.uid == userId;
    }
  }
 }
}
```