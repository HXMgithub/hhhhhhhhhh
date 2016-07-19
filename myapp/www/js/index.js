document.addEventListener('deviceready',onDeviceReady, false);
function onDeviceReady(){
	var btn = document.getElementById("btn");
	btn.onclick = function(){
		navigator.camera.getPicture(onSuccess, onFail, { quality: 50 });
	}
	var video = document.getElementById("video");
	video.onclick = function(){
		navigator.device.capture.captureVideo(captureSuccess, captureError, {limit:1});
	}
}
function onSuccess(){
	alert("success")
}
function onFail(error){
	alert(error)
}

var captureSuccess = function(mediaFiles) { 
	var i, path, len; 
	for (i = 0, len = mediaFiles.length; i < len; i += 1) { 	
		path = mediaFiles[i].fullPath; 
		// 对文件进行感兴趣的操作
		uploadMyapp(path);
	} 
}; 

// 采集操作出错后的回调函数 
var captureError = function(error) { 
	navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error'); 
}; 
function uploadMyapp(path){
	
		var win = function(r) { 
		   alert("success")
		}  
		
		var fail = function(error) { 
		    alert("An error has occurred: Code = " = error.code); 
		}  
		
		var options = new FileUploadOptions(); 
		options.fileKey="file"; 
		options.fileName=path.substr(path.lastIndexOf('/')+1); 
		options.mimeType="text/plain";  
		
		var params = new Object(); 
		params.value1 = "test"; 
		params.value2 = "param";  
		
		options.params = params;  
		
		var ft = new FileTransfer(); 
		ft.upload(path, "http://10.0.158.120/phonegapUpload/upload.php", win, fail, options);
}
