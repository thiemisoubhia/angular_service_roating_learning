# Angular Learning Journal 🚀

A hands-on learning journey through the fundamentals of Angular, including services, components, dependency injection, routing, and Bootstrap integration.

📄 **Summary available at:**  
[`main/Angular_Learning_Journal3.0.pdf`](main/Angular_Learning_Journal3.0.pdf)

---

## Topics Covered

### Angular Services
- Services handle business logic, HTTP requests, localStorage, and reusable functions.
- Created as classes and decorated with `@Injectable`.
- Singleton by default.
- Can be shared across components.

### VSCode Tip
Enable auto save via `File > Auto Save` to streamline development.

### Angular Routing

---

## 🧱 Project Structure

### 1. Create a New Project
```
ng new hello-world
```

### 2. Create a Component
```
ng g c e-info
```
Add the component to app.component.ts.

### 3. Create a Service
```
ng g service data
```
---

### 4. Lifecycle Hook - OnInit
Used for initializing logic when the component loads.

### 5. Employee Info Example
DataService provides mock employee data:
```
info1 = ["John", "E354", "j@abc.net"];
info2 = ["Rob", "E673", "rb@abc.net"];
info3 = ["Rose", "E865", "re@abc.net"];
```
Use ngFor to loop through data in the UI.

### 6. Forms and Data Binding
Add dynamic input through forms using ngModel and update service state.

---
## UI Design
Bootstrap Integration
Option 1: CDN
Link via the angular.json file.

Option 2: NPM
```
npm install bootstrap jquery
```
Then update angular.json:

```
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
  "node_modules/jquery/dist/jquery.min.js"
]
```
---

## 🌐 Angular Routing
Routing allows SPA (Single Page Application) navigation:

```
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent }
];
```
Use routerLink in the navbar to enable navigation.

---
Made with ❤️ while learning Angular through Simplilearn – Angular Basics.
Thiemi Soubhia Doi
