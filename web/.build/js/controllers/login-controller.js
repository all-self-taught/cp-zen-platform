angular.module("cpZenPlatform").controller("login",function(e,t,n,r){var i={unknown:"Unable to perform your request at this time - please try again later.","user-not-found":"Email address is not recognized.","invalid-password":"That password is incorrect","reset-sent":"An email with password reset instructions has been sent to you."},s=window.location.pathname;e.login={},e.forgot={},e.isVisible=function(t){return e.currentView===t},e.show=function(t){e.message="",e.errorMessage="",e.currentView=t},e.doLogin=function(){e.message="",e.errorMessage="";if(!e.loginForm.$valid)return;r.login(e.login,function(e){n.location.href="/dashboard"},function(){e.errorMessage="Invalid email or password!"})},e.sendPasswordResetEmail=function(){e.message="",e.errorMessage="";if(!e.forgotPasswordForm.$valid)return;r.reset({email:e.forgot.email},function(){e.message=i["reset-sent"]},function(t){e.errorMessage=i[t.why]||i.unknown})},e.logout=function(){r.logout(function(e){n.location.href="/"})},e.goHome=function(){window.location.href="/"},r.instance(function(t){t.user?(e.user=t.user,s==="/"&&(n.location.href="dashboard")):e.show("login")})});