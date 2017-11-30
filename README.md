# react-cloudinary-uploader - WIP!!!

A file uploader in React for uploading the picture to Cloudinary


# Usage

### Component

```
    <ReactCloudinaryUploader
        cloudName='appmasters-io'
        uploadPreset='willim-dev'
        onUploadSuccess={(image)=>{
            console.log("image",image);
            this.props.onChange([image.url]);
        }}
    />
```

### Staticaly

```
ReactCloudinaryUploader.open(options).then(image=>{
    if (this.props.returnJustUrl)
        image = image.url;
    console.log("image",image);
    this.props.onChange([image]);
}).catch(err=>{
    console.err(err);
});
```
