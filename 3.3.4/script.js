let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
  console.log("Vítej na stránce!");

  if (isAdmin) {
    console.log("Přístup do admin panelu povolen.");
  } else {
    console.log("Přístup do uživatelského dashboardu povolen.");
  }

} else {
  console.log("Nejsi přihlášený/á. Přihlas se.");
}