import React, {Component} from 'react';

class ReactCloudinaryUploader extends Component {

    constructor() {
        super();
        this.state = {
            bytes: null,
            createdAt: null,
            etag: null,
            format: null,
            height: null,
            width: null,
            path: null,
            publicId: null,
            resourceType: null,
            secure_url: null,
            signature: null,
            tags: [],
            thumbnailUrl: null,
            type: null,
            url: null,
            version: null,
            isError: false,
            errorMessage: null,
            showPoweredBy: false,
            allowedFormats: null,
            uuid: this.uuid()
        };
    }

    static open(options) {
        console.log("open");

        return new Promise((fulfil, reject) => {
            cloudinary.openUploadWidget(options,
                (error, result) => {
                    if (error) {
                        reject(error);
                        return false;
                    }
                    if (!result || result.length === 0) {
                        reject(new Error("No result from Cloudinary"));
                        return false;
                    }
                    if(result.event === 'success') {
                        result = result.info;
                        if(!Array.isArray(result)) result = [result];
                        result = result.map(image => {
                            image.url = `https://${image.url.replace('http://','')}`
                            return image;
                        });
    
                        if (options.returnJustUrl)
                            result = result.map(image=>image.url);
    
                        if (!options.multiple)
                            result = result[0];
    
                        fulfil(result);
                    }
                    return true;
                }
            );
        });
    }

    uuid() {
        function guid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }

            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        }

        return guid();
    }

    getUploadOptions() {
        let options = {
            cloud_name: this.props.cloudName,
            upload_preset: this.props.uploadPreset
        };
        options.sources = this.props.sources;
        options.multiple = this.props.multiple;

        if (this.props.maxFiles) {
            options.max_files = this.props.maxFiles
        }

        if (this.props.cropping && this.props.cropping === 'server') {
            options.cropping = this.props.cropping;
        }

        if (this.croppingAspectRatio) {
            options.cropping_aspect_ratio = this.props.croppingAspectRatio;
        }

        if (this.props.publicId) {
            options.public_id = this.props.publicId;
        }

        if (this.props.folder) {
            options.folder = this.props.folder;
        }

        if (this.props.tags && this.props.tags.length > 0) {
            options.tags = this.props.tags;
        }

        if (this.props.resourceType) {
            options.resourceType = this.props.resourceType;
        }

        if (this.props.allowedFormats) {
            options.allowedFormats = this.props.allowedFormats
        }

        let context = {};
        if (this.props.contextAlt) {
            context.alt = this.props.contextAlt;
        }

        if (this.props.contextCaption) {
            context.caption = this.props.contextCaption;
        }

        if (Object.keys(context).length > 0) {
            options.context = context;
        }

        return options;
    }

    setError(isError, errorMessage) {
        this.setState({
            isError: true,
            errorMessage: 'No result returned from Cloudinary'
        });
    }

    setUploadResult(uploadedImage) {
        console.log("uploadedImage", uploadedImage);
        this.setState({
            bytes: uploadedImage.bytes,
            createdAt: uploadedImage.created_at,
            etag: uploadedImage.etag,
            format: uploadedImage.format,
            height: uploadedImage.height,
            path: uploadedImage.path,
            publicId: uploadedImage.public_id,
            resourceType: uploadedImage.resource_type,
            secureUrl: uploadedImage.secure_url,
            signature: uploadedImage.signature,
            tags: uploadedImage.tags,
            thumbnailUrl: uploadedImage.thumbnail_url,
            type: uploadedImage.type,
            url: uploadedImage.url,
            version: uploadedImage.version,
            width: uploadedImage.width
        });
        if (this.props.onUploadSuccess)
            this.props.onUploadSuccess(uploadedImage);
    }

    handleClick(ev) {
        let self = this;
        console.log(this);
        try {
            let options = this.getUploadOptions();
            // call promise staticaly

            // cloudinary.openUploadWidget(options,
            //     (error, result) => {
            //         if (error) {
            //             self.setError(true, error);
            //             return false;
            //         }
            //
            //         if (!result || result.length === 0) {
            //             self.setError(true, 'No result from Cloudinary');
            //             return false;
            //         }
            //         var uploadedImage = result[0];
            //         self.setUploadResult(uploadedImage);
            //         return true;
            //     }
            // );
        } catch (e) {
            self.setError(true, e);
            return false;
        }

    }

    render() {
        console.log(this.props);
        if (!this.props.cloudName || !this.props.uploadPreset)
            throw new Error("cloudName and uploadPreset props must be set");

        let uploader_id = "uploader_" + this.state.uuid;
        let image = this.state.thumbnailUrl ? this.state.thumbnailUrl : '#';
        return (
            <section>
                <div>
                    <img src={image}/>
                </div>
                <a ref='uploader' id={uploader_id} href="#"
                   className={this.props.buttonClass}
                   onClick={() => this.handleClick()}>{this.props.buttonCaption}</a>
            </section>
        );
    }
}

// ReactCloudinaryUploader.propTypes = {
//     cloudName: React.PropTypes.string.isRequired,
//     uploadPreset: React.PropTypes.string.isRequired,
//     showPoweredBy: React.PropTypes.bool,
//     allowedFormats: React.PropTypes.array,
//     maxFileSize: React.PropTypes.number,
//     maxImageWidth: React.PropTypes.number,
//     maxImageHeight: React.PropTypes.number,
//     sources: React.PropTypes.arrayOf(React.PropTypes.string),
//     defaultSource: React.PropTypes.string,
//     multiple: React.PropTypes.bool,
//     maxFiles: React.PropTypes.number,
//     cropping: React.PropTypes.string,
//     croppingAspectRatio: React.PropTypes.number,
//     publicId: React.PropTypes.string,
//     folder: React.PropTypes.string,
//     tags: React.PropTypes.arrayOf(React.PropTypes.string),
//     resourceType: React.PropTypes.string,
//     contextAlt: React.PropTypes.string,
//     contextCaption: React.PropTypes.string,
//     buttonClass: React.PropTypes.string,
//     buttonCaption: React.PropTypes.string,
//     onUploadSuccess: React.PropTypes.object
// };

ReactCloudinaryUploader.defaultProps = {
    showPoweredBy: false,
    sources: ['local', 'url', 'camera'],
    defaultSource: 'local',
    multiple: false,
    maxFiles: null,
    cropping: null,
    croppingAspectRation: null,
    publicId: null,
    folder: null,
    tags: null,
    resourceType: 'auto',
    contextAlt: null,
    contextCaption: null,
    allowedFormats: ['png', 'gif', 'jpeg'],
    maxFileSize: null,
    maxImageWidth: null,
    maxImageHeight: null,
    buttonClass: 'cloudinary-button',
    buttonCaption: 'Upload image'
};

export default ReactCloudinaryUploader;
