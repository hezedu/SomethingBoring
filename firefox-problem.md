# `moz-chunked-arraybuffer` always initiate a 206 request
Configuration:
- Web browser and its version:  **Firefox 55.0.2**
- Operating system and its version: **Win 10**
- PDF.js version: **1.9.450**

## Log On maxAge=1000 * 60 * 60
FrontEnd:

![image](https://user-images.githubusercontent.com/8508437/29560990-691b2d90-8766-11e7-8ca5-0e7362ad3bad.png)

BackEnd:

![image](https://user-images.githubusercontent.com/8508437/29561225-47eb7020-8767-11e7-8064-4886821590d3.png)


### The problem was discovered using [pdf.js](https://github.com/mozilla/pdf.js)<br/>
![image](https://user-images.githubusercontent.com/8508437/29560654-49117172-8765-11e7-983d-841fb3d90bcf.png)


# 206 request have not cache:
![image](https://user-images.githubusercontent.com/8508437/29696889-37ab64f4-897e-11e7-9c77-95ea5b6d6cd1.png)
