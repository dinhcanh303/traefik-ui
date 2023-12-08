import { InputSwitch, InputSwitchChangeEvent } from "primereact/inputswitch";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { classNames } from "primereact/utils";
import { useState } from "react";

interface ForwardAuth {
    address : string;
    authRequestHeaders: string;
    authResponseHeaders: string;
    trustForwardHeader: boolean;
    authResponseHeadersRegex: string;
    tlsCA: string;
    tlsCert: string;
    tlsKey: string;
}

const ViewForwardAuth = (props : any) => {
    let emptyForwardAuth: ForwardAuth = {
        address: '',
        authRequestHeaders: '',
        authResponseHeaders: '',
        trustForwardHeader: false,
        authResponseHeadersRegex: '',
        tlsCA: '',
        tlsCert: '',
        tlsKey: ''
    };
    const [forwardAuth, setForwardAuth] = useState<ForwardAuth>(emptyForwardAuth);
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: string) => {
        const val = (e.target && e.target.value) || '';
        let _forwardAuth = { ...forwardAuth };
   
        // @ts-ignore
        _forwardAuth[`${name}`] = val;
   
        setForwardAuth(_forwardAuth);
    };
    const onSwitchChange = (e: InputSwitchChangeEvent, name: string) => {
        const val = (e.value && e.target.value) || '';
        let _forwardAuth = { ...forwardAuth };
   
        // @ts-ignore
        _forwardAuth[`${name}`] = val;
   
        setForwardAuth(_forwardAuth);
    };
    
    return (
        <>
            <div className="field">
                    <label htmlFor="address" className="font-bold">
                        Address: <span className="text-danger">*</span><p className='text-sm font-medium pl-1'>The address option defines the authentication server address.</p>
                    </label>
                    <InputText id="address" value={forwardAuth.address} onChange={(e) => onInputChange(e, 'address')} required autoFocus className={classNames({ 'p-invalid': props.submitted && !forwardAuth.address })} />
                    {props.submitted && !forwardAuth.address && <small className="p-error">Address is required.</small>}
            </div>
            <div className="field">
                    <label htmlFor="authRequestHeaders" className="font-bold">
                    Auth Request Headers:<p className='text-sm font-medium pl-1'>The authRequestHeaders option is the list of the headers to copy from the request to the authentication server. It allows filtering headers that should not be passed to the authentication server. If not set or empty then all request headers are passed.</p>
                    </label>
                    <InputTextarea id="authRequestHeaders" value={forwardAuth.authRequestHeaders} onChange={(e) => onInputChange(e, 'authRequestHeaders')} required rows={2} cols={20} />
            </div>
            <div className="field">
                    <label htmlFor="authResponseHeaders" className="font-bold">
                    Auth Response Headers:<p className='text-sm font-medium pl-1'>The authResponseHeaders option is the list of headers to copy from the authentication server response and set on forwarded request, replacing any existing conflicting headers.</p>
                    </label>
                    <InputTextarea id="authResponseHeaders" value={forwardAuth.authResponseHeaders} onChange={(e) => onInputChange(e, 'authResponseHeaders')} required rows={2} cols={20} />
            </div>
            <div className="field">
                <div className="flex justify-between align-items-center">
                <label htmlFor="trustForwardHeader" className="font-bold">
                    Trust Forward Header:<p className='text-sm font-medium pl-1'>Set the trustForwardHeader option to true to trust all X-Forwarded-* headers.</p>
                </label>
                <div className="mt-2 ml-3">
                    <InputSwitch checked={forwardAuth.trustForwardHeader} onChange={(e) => onSwitchChange(e,'trustForwardHeader')} />
                </div>
                </div>
                    
            </div>
            <div className="field">
                    <label htmlFor="authResponseHeadersRegex" className="font-bold">
                    Auth Response Headers Regex:<p className='text-sm font-medium pl-1'>The authResponseHeadersRegex option is the regex to match headers to copy from the authentication server response and set on forwarded request, after stripping all headers that match the regex. It allows partial matching of the regular expression against the header key. The start of string (^) and end of string ($) anchors should be used to ensure a full match against the header key.</p>
                    </label>
                    <InputText id="authResponseHeadersRegex" value={forwardAuth.authResponseHeadersRegex} onChange={(e) => onInputChange(e, 'authResponseHeadersRegex')} />
            </div>
            <div className="field">
                    <label htmlFor="tlsCA" className="font-bold">
                    CA:<p className='text-sm font-medium pl-1'>ca is the path to the certificate authority used for the secured connection to the authentication server, it defaults to the system bundle.</p>
                    </label>
                    <InputText id="tlsCA" value={forwardAuth.tlsCA} onChange={(e) => onInputChange(e, 'tlsCA')} />
            </div>
            <div className="field">
                    <label htmlFor="tlsCert" className="font-bold">
                    Cert:<p className='text-sm font-medium pl-1'>cert is the path to the public certificate used for the secure connection to the authentication server. When using this option, setting the key option is required.</p>
                    </label>
                    <InputText id="tlsCert" value={forwardAuth.tlsCert} onChange={(e) => onInputChange(e, 'tlsCert')} />
            </div>
            <div className="field">
                    <label htmlFor="tlsKey" className="font-bold">
                    Key:<p className='text-sm font-medium pl-1'>key is the path to the private key used for the secure connection to the authentication server. When using this option, setting the cert option is required.</p>
                    </label>
                    <InputText id="tlsKey" value={forwardAuth.tlsKey} onChange={(e) => onInputChange(e, 'tlsKey')} />
            </div>
        </>
    );
}

export default ViewForwardAuth;