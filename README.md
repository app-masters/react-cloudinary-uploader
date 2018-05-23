# react-cloudinary-uploader - WIP!!!

V-0.1.3

A file uploader in React for uploading the picture to Cloudinary


# Installation

```npm install @app-masters/react-cloudinary-uploader --save```

# Usage

You ever must import cloudinary globals on your html head.

```<script src="//widget.cloudinary.com/global/all.js" type="text/javascript">```

After this you could choose between to uses methods; `Component` and `Static`




### Static

You can use ReactCloudinaryUploader over static call receiving a promisse.

```
let options = {
    cloud_name: "demo",
    upload_preset: "a5vxnzbp",
    multiple: true,
    returnJustUrl: true
};

ReactCloudinaryUploader.open(options).then(image=>{
    if (this.props.returnJustUrl)
        image = image.url;
    console.log("image",image);
}).catch(err=>{
    console.error(err);
});
```

### Component - WIP

Allow you to use it like a component, showing a button and the result image.

```
    <ReactCloudinaryUploader
        cloudName='appmasters-io'
        uploadPreset='willim-dev'
        onUploadSuccess={(image)=>{
            console.log("image",image);
        }}
    />
```

## Options

### ReactCloudinaryUploader Options

* **multiple**: Enable upload more than one file
* **returnJustUrl**: Ever return just the image URL, without metadata


### Cloudinary Options

The component accepts few properties as input. cloudName and uploadPreset are required properties for this component.
* **cloudName**: the cloud name that you can find in your configuration in Cloudinary.
* **uploadPreset**: The upload_preset that you can find in your settins (Upload) in Cloudinary.
* **showPoweredBy** [true | false]: It shows the poweredBy logo in the widget.
* **allowedFormats**: An array of allowed format. (e.g. ['jpeg', 'png'])
* **maxFileSize**: If specified, perform client side validation that prevents uploading files bigger than the given bytes size (e.g. 130000)
* **maxImageWidth**: If specified, client-side scale-down resizing takes place before uploading if the width of the selected file is bigger than the specified value. (e.g. 2000)
* **maxImageHeight**: If specified, client-side scale-down resizing takes place before uploading if the height of the selected file is bigger than the specified value. (e.g. 2000)
* **sources** ["local", "web", "web"]: List of file sources
* **defaultSource**: The default selected source tab when the widget is opened.
* **multiple**: Whether selecting and uploading multiple images is allowed.
* **maxFiles**: The maximum number of files allowed in multiple upload mode.
* **cropping** ["server" | null]: Whether to enable interactive cropping of images before uploading.
* **croppingAspectRatio**: If specified, enforce the given aspect ratio on selected region when performing interactive cropping. (e.g. 0.5)
* **publicId**: Custom public ID to assign to a single uploaded image.
* **folder**: Folder name for all uploaded images. Acts as the prefix of assigned public IDs.
* **tags**: One or more tags to assign to the uploaded images.
* **resourceType** ["auto", "image", "raw"]: The resource type of the uploaded files.
* **contextAlt**: Additional context metadata to attach to the uploaded images.
* **contextCaption**: Additional context metadata to attach to the uploaded images.
* **buttonClass**: Allows overriding the default CSS class name of the upload button added to your site.
* **buttonCaption**: Allows overriding the default caption of the upload button added to your site.
