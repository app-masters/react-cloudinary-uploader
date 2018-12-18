"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactCloudinaryUploader = function (_Component) {
    _inherits(ReactCloudinaryUploader, _Component);

    function ReactCloudinaryUploader() {
        _classCallCheck(this, ReactCloudinaryUploader);

        var _this = _possibleConstructorReturn(this, (ReactCloudinaryUploader.__proto__ || Object.getPrototypeOf(ReactCloudinaryUploader)).call(this));

        _this.state = {
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
            uuid: _this.uuid()
        };
        return _this;
    }

    _createClass(ReactCloudinaryUploader, [{
        key: "uuid",
        value: function uuid() {
            function guid() {
                function s4() {
                    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
                }

                return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
            }

            return guid();
        }
    }, {
        key: "getUploadOptions",
        value: function getUploadOptions() {
            var options = {
                cloud_name: this.props.cloudName,
                upload_preset: this.props.uploadPreset
            };
            options.sources = this.props.sources;
            options.multiple = this.props.multiple;

            if (this.props.maxFiles) {
                options.max_files = this.props.maxFiles;
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
                options.allowedFormats = this.props.allowedFormats;
            }

            var context = {};
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
    }, {
        key: "setError",
        value: function setError(isError, errorMessage) {
            this.setState({
                isError: true,
                errorMessage: 'No result returned from Cloudinary'
            });
        }
    }, {
        key: "setUploadResult",
        value: function setUploadResult(uploadedImage) {
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
            if (this.props.onUploadSuccess) this.props.onUploadSuccess(uploadedImage);
        }
    }, {
        key: "handleClick",
        value: function handleClick(ev) {
            var self = this;
            console.log(this);
            try {
                var options = this.getUploadOptions();
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
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            console.log(this.props);
            if (!this.props.cloudName || !this.props.uploadPreset) throw new Error("cloudName and uploadPreset props must be set");

            var uploader_id = "uploader_" + this.state.uuid;
            var image = this.state.thumbnailUrl ? this.state.thumbnailUrl : '#';
            return _react2.default.createElement(
                "section",
                null,
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement("img", { src: image })
                ),
                _react2.default.createElement(
                    "a",
                    { ref: "uploader", id: uploader_id, href: "#",
                        className: this.props.buttonClass,
                        onClick: function onClick() {
                            return _this2.handleClick();
                        } },
                    this.props.buttonCaption
                )
            );
        }
    }], [{
        key: "open",
        value: function open(options) {
            console.log("open");

            return new Promise(function (fulfil, reject) {
                cloudinary.openUploadWidget(options, function (error, result) {
                    if (!Array.isArray(result)) result = [result];
                    if (error) {
                        reject(error);
                        return false;
                    }
                    if (!result || result.length === 0) {
                        reject(new Error("No result from Cloudinary"));
                        return false;
                    }

                    result = result.map(function (image) {
                        image.url = "https://" + image.url.replace('http://', '');
                        return image;
                    });

                    if (options.returnJustUrl) result = result.map(function (image) {
                        return image.url;
                    });

                    if (!options.multiple) result = result[0];

                    fulfil(result);
                    return true;
                });
            });
        }
    }]);

    return ReactCloudinaryUploader;
}(_react.Component);

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

exports.default = ReactCloudinaryUploader;
//# sourceMappingURL=ReactCloudinaryUploader.js.map