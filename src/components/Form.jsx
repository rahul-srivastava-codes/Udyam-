import { useState } from "react";

function Form() {
  const [validate, setvalidate] = useState(false);
  const [adhaar, setadhaar] = useState();
  const [name, setname] = useState("");
  return (
    <div className="w-[75vw] items-center border-2 border-zinc-400 ml-[15vw] mt-10 rounded-lg shadow-stone-800">
      <div className="px-4 py-2 bg-[#007bff] text-white">
        Aadhaar Verification With OTP
      </div>
      <div className="px-10 ">
        <div className="flex items-center justify-between font-semibold gap-4 mt-5">
          <div className="flex flex-col">
            <div>1. Aadhaar Number/ आधार संख्या </div>
            <div className="py-2">
              <input
                onChange={(e) => setadhaar(e.target.value)}
                className="bg-zinc-50 border-1 border-zinc-300 rounded-lg px-2 py-1 w-[33vw] font-mono"
                placeholder="Your Aadhaar No"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div>2. Name of Entrepreneur / उद्यमी का नाम</div>
            <div className="py-2">
              <input
                className="bg-zinc-50 border-1 border-zinc-300 rounded-lg px-2 py-1 w-[33vw] font-mono "
                placeholder="Name as per Aadhaar "
                type="text"
                onChange={(e) => setname(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="ml-[6vh] w-[68vw] text-xm  mt-3">
          <li>Aadhaar number shall be required for Udyam Registration.</li>
          <li>
            The Aadhaar number shall be of the proprietor in the case of a
            proprietorship firm, of the managing partner in the case of a
            partnership firm and of a karta in the case of a Hindu Undivided
            Family (HUF).
          </li>
          <li>
            In case of a Company or a Limited Liability Partnership or a
            Cooperative Society or a Society or a Trust, the organisation or its
            authorised signatory shall provide its GSTIN(As per applicablity of
            CGST Act 2017 and as notified by the ministry of MSME vide S.O.
            1055(E) dated 05th March 2021) and PAN along with its Aadhaar
            number.
          </li>
        </div>
        <div className="mt-4">
          <input
            type="checkbox"
            className="bg-zinc-400 mr-4"
            onClick={(e) => setvalidate(!validate)}
          />
          {console.log(validate)}
          I, the holder of the above Aadhaar, hereby give my consent to Ministry
          of MSME, Government of India, for using my Aadhaar number as alloted
          by UIDAI for Udyam Registration. NIC / Ministry of MSME, Government of
          India, have informed me that my aadhaar data will not be
          stored/shared. / मैं, आधार धारक, इस प्रकार उद्यम पंजीकरण के लिए
          यूआईडीएआई के साथ अपने आधार संख्या का उपयोग करने के लिए सू0ल0म0उ0
          मंत्रालय, भारत सरकार को अपनी सहमति देता हूं। एनआईसी / सू0ल0म0उ0
          मंत्रालय, भारत सरकार ने मुझे सूचित किया है कि मेरा आधार डेटा संग्रहीत
          / साझा नहीं किया जाएगा।
        </div>
        <button className="bg-blue-600 px-6 mt-5 text-white mb-10 py-2 rounded-lg">
          Validate & Generate OTP
        </button>
      </div>
    </div>
  );
}

export default Form;
