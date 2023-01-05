/* eslint-disable no-multi-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable global-require */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { API_UPLOAD_URL } from '../../constants/defaultValues';

class MyUploadAdapter {
  constructor(loader, onUpload) {
    this.loader = loader;
    this.url = `${API_UPLOAD_URL}/image`;
    this.onUpload = onUpload;
  }

  upload() {
    return this.loader.file.then(async (file) => {
      return new Promise((resolve, reject) => {
        this.onUpload(true);
        this.initRequest();
        if (file.size > 2000000) {
          this.onUpload(false);
          reject();
        } else {
          this.initListeners(resolve, reject, file);
          this.sendRequest(file);
        }
      });
    });
  }

  abort() {
    if (this.xhr) {
      this.xhr.abort();
    }
  }

  initRequest() {
    const xhr = (this.xhr = new XMLHttpRequest());
    xhr.open('POST', this.url, true);
    xhr.responseType = 'json';
  }

  initListeners(resolve, reject, file) {
    const { xhr } = this;
    const { loader } = this;
    const genericErrorText = `Couldn't upload file: ${file.name}.`;
    xhr.addEventListener('error', () => {
      this.onUpload(false);
      reject(genericErrorText);
    });
    xhr.addEventListener('abort', () => {
      this.onUpload(false);
      reject();
    });
    xhr.addEventListener('load', () => {
      const { response } = xhr;
      this.onUpload(false);
      if (!response || response.error) {
        return reject(
          response && response.error ? response.error.message : genericErrorText
        );
      }
      return resolve({
        default: response.location,
      });
    });
    if (xhr.upload) {
      xhr.upload.addEventListener('progress', (evt) => {
        if (evt.lengthComputable) {
          loader.uploadTotal = evt.total;
          loader.uploaded = evt.loaded;
        }
      });
    }
  }

  sendRequest(file) {
    const data = new FormData();
    data.append('image', file);
    this.xhr.send(data);
  }
}

const DNXCustomUploadAdapterPlugin = (editor, onUpload) => {
  if (editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      loader.onUpload = editor.onUpload;
      loader.accessToken = editor.accessToken;
      return new MyUploadAdapter(loader, onUpload);
    };
  }
};
const CKEditor5 = (props) => {
  const [comp, setComp] = React.useState({
    CKEditor: null,
    ClassicEditor: null,
  });
  const [loaded, setLoaded] = React.useState(false);
  const [uploading, setUploading] = React.useState(false);
  React.useEffect(() => {
    setComp({
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
      ClassicEditor: require('ckeditor5-build-classic-dna'),
    });
    setLoaded(true);
  }, []);
  return (
    loaded && (
      <>
        {uploading && (
          <div className="fw-6 fc-primary">
            <Spin indicator={<LoadingOutlined />} /> Uploading ...
          </div>
        )}
        <comp.CKEditor
          editor={comp.ClassicEditor}
          data={props.value}
          config={{
            table: {
              customClass: ['ui', 'table', 'celled'],
            },
            image: {
              customClass: ['ui', 'fluid', 'image'],
            },
            mediaEmbed: {
              previewsInData: true,
            },
            toolbar: [
              // 'code',
              // '|',
              'heading',
              '|',
              'bold',
              'italic',
              'link',
              'bulletedList',
              'numberedList',
              // '|',
              // 'indent',
              // 'outdent',
              '|',
              'imageUpload',
              // 'insertImage',
              // 'codeBlock',
              'blockQuote',
              'insertTable',
              'mediaEmbed',
              'undo',
              'redo',
            ],
            link: {
              rators: {
                dTargetToExternalLinks: {
                  de: 'automatic',
                  llback: (url) => /^(https?:)?\/\//.test(url),
                  attributes: {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                },
              },
            },
          }}
          onReady={(editor) => {
            // editor.onUpload = this.props.onUpload;
            // editor.accessToken = this.props.accessToken;
            DNXCustomUploadAdapterPlugin(editor, (e) => setUploading(e));
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            props.onChange(data);
          }}
        />
      </>
    )
  );
};

export default CKEditor5;
