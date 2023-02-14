import { Block } from '@material-ui/icons';
import React from 'react';
import { useForm } from 'react-hook-form';
import usePrettyPrintedState from './usePrettyPrintedState';
import { ToastContainer,toast } from 'react-toastify'; // <- add ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // <- add line 


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

  // const notify = () => 

  const onSubmit = (data, e) => {
    setSubmitValue(data);
    e.target.reset();
    toast("Your data has been submitted and will be reviewed - Thank you!");

// Config variables
const SPREADSHEET_ID = "1r4j_d6KWVMxUueOWjl4sC3qm3fxgrv-rhLY8lvSOkFc";

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const appendSpreadsheet = async (row) => {
  try {
    const creds = require('./protein-redox-potential-ae6bfd2d4fe4.json')
    await doc.useServiceAccountAuth(creds); //'ae6bfd2d4fe4a5f1c0258a8562b274389285b24d');
    // console.log('this is row:', row);

    await doc.loadInfo();
    const sheet = doc.sheetsByTitle['redox'];
    // console.log(sheet);
    // console.log(sheet.title);
    // console.log(sheet.rowCount);

    const result = await sheet.addRow(row);
  } catch (e) {
    console.error('Error blah: ', e);
  }
};
// console.log("this is data", data);
appendSpreadsheet(data);
  };

  console.log(errors);

  return (

    <div class="bg-img">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <label for="firstName" class="first-name">ProteinName</label> */}
        <div>
          <input type="text" placeholder="Protein" {...register("enzyme_name", {required: true, maxLength: 80})} />
          {/* <input type="text" placeholder="Protein" {...register("enzyme_name", {required: false, maxLength: 80})} /> */}
        </div>
        {/* doi	uniprot_id	organism	temp_K	pH	method	buffer	EC	Mutant	notes	reviewed														 */}
        {/* <label for="firstName" class="first-name">Cofactor</label> */}
        <div>
          <input type="text" placeholder="Cofactor" {...register("cofactor", {required: true, maxLength: 100})} />
          {/* <input type="text" placeholder="Cofactor" {...register("cofactor", {required: false, maxLength: 100})} /> */}
        </div>

        {/* <label for="firstName" class="first-name">CofactorType</label> */}
        <div>
          <input type="text" placeholder="CofactorType" {...register("cofactor_type", {required: true})} />
          {/* <input type="text" placeholder="CofactorType" {...register("cofactor_type", {required: false})} /> */}
        </div>
        {/* <label for="firstName" class="first-name">Redox (mv)</label> */}
        <div>
          <input type="number" placeholder='Redox (mv)'{...register("redox_mv", {required: true, maxLength: 12})} />
          {/* <input type="number" placeholder='Redox (mv)'{...register("redox_mv", {required: false, maxLength: 12})} /> */}
        </div> 
        {/* <label for="firstName" class="first-name">pdbID</label> */}
        <div>
          <input type="text" placeholder='pdbID' {...register("pdb", {})} />
        </div>
        {/* <label for="firstName" class="first-name">doiUrl</label> */}
        <div>
          <input type="url" placeholder="https://www.doi.org/" {...register("doi", {required: true})} />
          {/* <input type="url" placeholder="https://www.doi.org/" {...register("doi", {required: false})} /> */}
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
          <input type="email" placeholder="email@domain.com" {...register("email", {required: true})} />
          {/* <input type="email" placeholder="email@domain.com" {...register("email", {required: false})} /> */}
        </div>

        <div>
          <label for="Reviewed" class="first-name">Reviewed</label>
        </div>
        
        <div> 
          <input type="text" value="no" {...register("reviewed", {})} readOnly/>
        </div>
        
        <div> 
          <input type="submit"/>
                  <ToastContainer />   
        </div>
      </form>
    </div>
  );
  
  }
