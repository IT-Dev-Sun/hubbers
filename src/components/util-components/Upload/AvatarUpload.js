import React, { useEffect, useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Upload, message } from 'antd';
import { API_UPLOAD_URL } from '../../../constants/defaultValues';
import { ImageSvg } from '../../../assets/svg/icon';
import CustomIcon from '../CustomIcon';

const { Dragger } = Upload;

const AvatarUpload = ({ statusChange, image }) => {
  const [uploadLoading, setUploadLoading] = useState(false);
  const [uploadedImg, setImage] = useState('');

  useEffect(() => {
    setImage(image);
  }, [image]);

  const imageUploadProps = {
    name: 'avatar',
    multiple: false,
    listType: 'picture-card',
    showUploadList: false,
    action: `${API_UPLOAD_URL}/avatar`,
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const handleUploadChange = (info) => {
    if (info.file.status === 'uploading') {
      setUploadLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      const imageUrl = info.file.response.location;
      setImage(imageUrl);
      statusChange(imageUrl);
      setUploadLoading(false);
    }
  };

  return (
    <Dragger
      {...imageUploadProps}
      beforeUpload={beforeUpload}
      onChange={(e) => handleUploadChange(e)}
    >
      {uploadedImg ? (
        <img src={uploadedImg} alt="avatar" className="img-fluid" />
      ) : (
        <div>
          {uploadLoading ? (
            <div>
              <LoadingOutlined className="font-size-xxl text-primary" />
              <div className="mt-3">Uploading</div>
            </div>
          ) : (
            <div>
              <CustomIcon className="display-3" svg={ImageSvg} />
              <p>Click or drag file to upload</p>
            </div>
          )}
        </div>
      )}
    </Dragger>
  );
};

export default AvatarUpload;
