import { Block } from '@material-ui/icons';
import React from 'react';
import { useForm } from 'react-hook-form';
import usePrettyPrintedState from './usePrettyPrintedState';
// import { usePrettyPrintedState } from "./usePrettyPrintedState.tsx";
const { GoogleSpreadsheet } = require('google-spreadsheet');

export default function Form() {
   
  const [submitValue, setSubmitValue] = usePrettyPrintedState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const onSubmit = (data, e) => {
    e.target.reset(); // reset after form submit
    setSubmitValue(data);

// Config variables
const SPREADSHEET_ID = "1r4j_d6KWVMxUueOWjl4sC3qm3fxgrv-rhLY8lvSOkFc";
const SHEET_ID = 761716361;
// const CLIENT_EMAIL = "writespreadsheet@protein-redox-potential.iam.gserviceaccount.com";
// const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC5rl51ywFmZOPxTu0+Ua3uXjjXyzIwhJH6FJoRI37UfIftzmV1GpHjynAsLYqXOaKT7zXTxWjPB1i3FhCvYodgjRyxu5o4RAh6XPcMRgLU9VR6Q33WJePIVubOZW+lHFzgkqStlCDI7PHmJl28SYTHWIcDTFwnoVr6lPkcnomk49o0mRmI5Fnvch3U8eBN0jmlQG9uzJygM1N0KXrLAjUmkfAhLjPfgtV9NN+UiMb1sU3wLXhMeBK9WgCUDp6EHTGW4AYM1N1eS+XB16gaE1yxLIqKXhYtzsIWiTGqWvDydVM6qq0XelDc4rsLALF8FR7hLGD75MxoS7hUOzYONWiXAgMBAAECggEAW3vDU5MBLhNgUTibYBx7LxniNMQLBueSSp4S6IXOC+ANUsfhqgg8v/gyOzn28ho19WAi66N0R6htd8tZziej3pi3/gOZ8MXoTW13VOc7pvP2usR8/+EsML1MO32zu6xVQFpP46u7WXOQnV3iyg2I63S9FI1vTCFOQ27Zq9WaqI+4Xwa1/YJQBGydXxI48SaKlOLLDoZgenUq17TPEEx9zQ0ig0J9Etey8ONjzXWfUEVFqvMmUEYnu5U/le/5+igLNfAMwqwTl4NV335vLEz9BzQrpEvEbbpVF6GOSpWbGPi1yGCYBkn/JLvUQMS+MxBslWXamck1MsBD4GoU7H+tHQKBgQD0yixfBTZFAEs3hLVJEA5hilOgZuD95RxD+sDC5vf8/7pej1PvjLa8D05BBF39Sv1AvvqxF/hO7h63A8o78xh7E97j7n74zHx5kH3EcoMaywDL8q1ZdgChWveC3dIoxqcABJmbHMHT8NJEn3HL42rYuv/QqNNUUW624J0kzXVHCwKBgQDCLzpE2V/TVnXUylvuX77oLy3GAIghz27Q7dm0uwK69L1mnoCNRtrpO42+8oelP8cpwoyBGZQxKIgnk9ij9TQxRPGcsyJ40NEatROz8b05VslWBdi2tl04AaVafRP1FYyBp4Jl02VwmYoD2At1TkbxhzFfTYgnzdECWZ30JszsJQKBgQCwoYVc1wzuwySDHf4Vh0FpPn/TOQjWC1DW+IPI3xJH+1rGSpOdQaLFliG4JmePkmGlK2kHCi3A/m8pTdHKakHa5V6qh3gVHLAgo5Msghh558teXnCZId2YkGQSiO7RP25XQ/p2g0yVGqsOmyJopWN+mYhnTrqWl9/Uk8SwPpSGOwKBgQCC1glfrErZfW7lEfeBFDfv/yHLQD548WfMFAZUtJBxYUdgJjmddvk2nq6x0n28xM0vgOrkbVShDps2d3JHfoZNEBPvLe9zEddiNFFzM9T4FlaPxF6xNQx4GPvNjWrt/jfuf+vnKdk2Ve1dC6skvbolMJ7+hKHRl+ZUvAcmIyJ9lQKBgAyVcHBQ3R91R0URRafoRp21J9oLCLkVEh1pHUY6P50wOpBYiRg6w5jNE7LkU/sSrOoCAs6nLbo4x8laj4l1Iv8jjimVoPGIxwQO/Ed9sMz4yVDvss8I3zztSAbYCjLlONOiqxNPJL+GBOsRS25mCqPhRNVW01z6YYk1JHVKSlph-----END PRIVATE KEY-----";

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const appendSpreadsheet = async (row) => {
  try {
    const creds = require('./protein-redox-potential-ae6bfd2d4fe4.json')
    // const key = creds.private_key.replace(/(\r\n|\n|\r)/gm, '')
    // console.log('creds: ', key)
    // await doc.useServiceAccountAuth(creds.client_email,key); //'ae6bfd2d4fe4a5f1c0258a8562b274389285b24d');
    await doc.useServiceAccountAuth(creds); //'ae6bfd2d4fe4a5f1c0258a8562b274389285b24d');
    // loads document properties and worksheets
    console.log('this is row:', row);

    await doc.loadInfo();
    const sheet = doc.sheetsByTitle['redox'];
    console.log(sheet);
    console.log(sheet.title);
    console.log(sheet.rowCount);

    const result = await sheet.addRow(row);
  } catch (e) {
    console.error('Error blah: ', e);
  }
};
console.log("this is data", data);
appendSpreadsheet(data);
  };

  console.log(errors);

  return (

    <div class="bg-img">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <label for="firstName" class="first-name">ProteinName</label> */}
        <div>
          <input type="text" placeholder="Protein" {...register("enzyme_name", {required: true, maxLength: 80})} />
        </div>
        {/* doi	uniprot_id	organism	temp_K	pH	method	buffer	EC	Mutant	notes	reviewed														 */}
        {/* <label for="firstName" class="first-name">Cofactor</label> */}
        <div>
          <input type="text" placeholder="Cofactor" {...register("cofactor", {required: true, maxLength: 100})} />
        </div>

        {/* <label for="firstName" class="first-name">CofactorType</label> */}
        <div>
          <input type="text" placeholder="CofactorType" {...register("cofactor_type", {required: true})} />
        </div>
        {/* <label for="firstName" class="first-name">Redox (mv)</label> */}
        <div>
          <input type="number" placeholder='Redox (mv)'{...register("redox_mv", {required: true, maxLength: 12})} />
        </div> 
        {/* <label for="firstName" class="first-name">pdbID</label> */}
        <div>
          <input type="text" placeholder='pdbID' {...register("pdb", {})} />
        </div>
        {/* <label for="firstName" class="first-name">doiUrl</label> */}
        <div>
          <input type="url" placeholder="https://www.doi.org/" {...register("doi", {required: true})} />
        </div> 

        <div>
          <input type="text" placeholder="UniprotID" {...register("uniprot_id")} />
        </div>

        <div>
          <input type="text" placeholder="Enzyme Class" {...register("EC")} />
        </div>

        <div>
          <input type="text" placeholder="Organism" {...register("organism", {})} />
        </div> 

        {/* <label for="firstName" class="first-name">Buffer</label> */}
        <div>
          <input type="text" placeholder="Buffer" {...register("buffer", {})} />
        </div>
        {/* <label for="firstName" class="first-name">Method</label> */}
        <div>
          <input type="text" placeholder="Method" {...register("method", {})} />
        </div>
        
        {/* <label for="firstName" class="first-name">pH</label> */}
        <div> 
          <input type="number" placeholder="pH" {...register("pH", {})} />
        </div>
        
        {/* <label for="firstName" class="first-name">Notes</label> */}
        <div> 
          <input type="text" placeholder="Notes" {...register("notes", {})} />
        </div>
        
        
        {/* <label for="firstName" class="first-name">T</label> */}
        <div>
        <input type="number" placeholder="Temperature (K)" {...register("temp_K", {})} />
        </div>

        <div> 
          <input type="email" placeholder="email@domain.com" {...register("email", {})} />
        </div>

        <div>
          <label for="Reviewed" class="first-name">Reviewed</label>
        </div>
        
        <div> 
          <input type="text" value="no" {...register("reviewed", {})} readOnly/>
        </div>
        
        <div> 
          <input type="submit" />
        </div>
      </form>
    </div>
  );
  
  }
