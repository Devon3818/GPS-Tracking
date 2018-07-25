
import $ from 'jquery'

//图片上传

var upfun = (file)=> {
            
    var fdata = new FormData();
    fdata.append("img1", file);

    return new Promise((resolve, reject)=>{
        
        $.ajax({
            data: fdata,
            type: "POST",
            url: "http://shunfengche.qishare.cn/windmillsteward/user_api/common/imgUpload",
            cache: false,
            contentType: false,
            processData: false,
            success: function(data) {
                console.log(data);
                resolve(data)
            }
        });

    })

    
}

export default upfun