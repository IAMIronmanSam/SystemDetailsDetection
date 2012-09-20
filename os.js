
//OS Name
var OSName="Unknown OS";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
console.log(OSName);
//
navigator.mimeTypes = [object MimeTypeArray]
navigator.appName = Netscape
navigator.product = Gecko
navigator.vendor = Google Inc.
navigator.onLine = true
navigator.cookieEnabled = true
navigator.productSub = 20030107
navigator.language = en-US
navigator.userAgent = Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.89 Safari/537.1
navigator.appVersion = 5.0 (Windows NT 6.2) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.89 Safari/537.1
navigator.appCodeName = Mozilla
navigator.plugins = [object PluginArray]
navigator.webkitGamepads = [object GamepadList]
navigator.geolocation = [object Geolocation]
navigator.platform = Win32
navigator.vendorSub = 
navigator.javaEnabled = function javaEnabled() { [native code] }
navigator.getStorageUpdates = function getStorageUpdates() { [native code] }
navigator.registerProtocolHandler = function registerProtocolHandler() { [native code] }
navigator.webkitStartActivity = function webkitStartActivity() { [native code] }
navigator.webkitGetUserMedia = function webkitGetUserMedia() { [native code] }

	var isIE = false;
    var isFF = false;
    var isOP = false;
    var isSafari = false;
     
    function DetectBrowser()
    {
        var val = navigator.userAgent.toLowerCase();
           
       if(val.indexOf("firefox") > -1)
       {
           isFF = true;
       } 
       else if(val.indexOf("opera") > -1)
       {
           isOP = true;
       }
       else if(val.indexOf("msie") > -1)
       {
           isIE = true;
      } 
       else if(val.indexOf("safari") > -1)
       {
           isIE = true;
       } 
    
   }

   1.BrowserName
2.BrowserVersion
3.BrowserResolution
4.BrowserLanguage
5.ReferrerUrl
6.NetFrameworkVersion
7.SilverlightVersion
8.OperatingSystemName
9.OperatingSystemVersion

ar control = new ActiveXObject('AgControl.AgControl');
 try {
                 // create the ActiveX Object of AgControl.
                    // This is the core of Silverlight runtime.
                    var control = new ActiveXObject('AgControl.AgControl');
  
                  // will execute if your latest Silverlight version is 4.
                   if (control.IsVersionSupported("4.0")) {
                       silverlightVersion = 4;
                   }
                   // will execute if your latest Silverlight version is 3.
                   else if (control.IsVersionSupported("3.0")) {
                       silverlightVersion = 3;
             }
                   // will execute if your latest Silverlight version is 2.
                   else if (control.IsVersionSupported("2.0")) {
                       silverlightVersion = 2;
                   }
                   // if Silverlight version is not supported by your app,
                   // set it as 0 (zero).
                   else {
                       silverlightVersion = 0;
                   }
                   control = null;
               }
               catch (e) {
                   // if any exception while creating the ActiveX Object,
                   // will set the silverlightVersion as -1.
                   silverlightVersion = -1;
                   alert("Unable to create the ActiveX Object from Browser window.");
               }
           }