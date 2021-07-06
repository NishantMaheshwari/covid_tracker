import React, {useState,useEffect} from "react";
import { NativeSelect,FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import {fetchCountries} from "../../api";

const CountryPicker = ({handleCountryChange}) => {

  const [fetchedCountries, setfetchedCountries] = useState([]);

 useEffect(()=>{
   const fetchAPI=async()=>{
    setfetchedCountries(await fetchCountries());
   }
   fetchAPI();
 },[setfetchedCountries]);

  return (
    <div>
      <FormControl className={styles.formControl} style={{minWidth: 120}}>
        <NativeSelect  className={styles.container} defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
          <option value="">Global</option>
          {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
        </NativeSelect>
      </FormControl>
      <FormControl className={styles.formControl} style={{minWidth: 120}}>
        <NativeSelect className={styles.container} defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
          <option value="">State</option>
          <option value="">Saint vincent and the grenadines</option>
        </NativeSelect>
      </FormControl>
      <FormControl className={styles.formControl} style={{minWidth: 120}}>
        <NativeSelect className={styles.container}  defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
          <option value="">District</option>
          <option value="">Saint vincent and the grenadines</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
