import React, { useState, useMemo } from 'react';
import Sidebaar2 from './Sidebaar2';
import Navbaar from '../Homepage/Navbaar';
import PhotoUploader from './ImageUpload';

export default function CheckIn(){
  // tabs
  const tabs = ['Quick','Details','Photo','Posting','GST','Reservation'];
  const [activeTab, setActiveTab] = useState('Quick');

  // guest form state
  const [form, setForm] = useState({
    title: 'Mr',
    guestName: '',
    mobile: '',
    email: '',
    arrDate: '',
    depDate: '',
    noOfRoom: 1,
    noOfNight: 1,
    paxType: 'Male',
    deal: '',
    masterRoom: '103',
    plan:'AMERICAN PLAN',
    wifiUser:'',
    wifiPass:'',
    idType:'',
    idNumber:'',
  });

  // photos
  const [guestPhotos, setGuestPhotos] = useState([]); // single
  const [extraPersons, setExtraPersons] = useState([]); // multiple persons
  // GST toggles
  const [isGST, setIsGST] = useState(false);
  const [gstNumber, setGstNumber] = useState('');

  // Posting related values (simple logic)
  const [posting, setPosting] = useState({
    baseTariff: 2000,
    extraPersonCharge: 500,
    extraPersonCount: 0,
    otherCharges: 0,
    discount: 0
  });

  // derived totals
  const summary = useMemo(()=>{
    const base = Number(posting.baseTariff || 0);
    const extra = Number(posting.extraPersonCharge || 0) * Number(posting.extraPersonCount || 0);
    const other = Number(posting.otherCharges || 0);
    const discount = Number(posting.discount || 0);
    const subtotal = base + extra + other - discount;
    const gstRate = isGST ? 0.18 : 0; // 18%
    const gstAmount = subtotal * gstRate;
    const total = subtotal + gstAmount;
    return { base, extra, other, discount, subtotal, gstRate, gstAmount, total };
  }, [posting, isGST]);

  function updateField(k,v){ setForm(f => ({...f, [k]: v})); }
  function updatePosting(k,v){ setPosting(p => ({...p, [k]: v})); }

  function saveCheckIn(e){
    e?.preventDefault();
    // Basic validation
    if(!form.guestName) return alert('Guest Name required');
    if(isGST && !gstNumber) return alert('Please enter GST number');
    // Simulate save — in real app, call API
    const payload = { form, guestPhotos, extraPersons, posting, gst: isGST ? gstNumber : null, summary };
    console.log('CheckIn payload', payload);
    alert('Check-In saved (see console)'); // replace with real API
  }

  function onPrint(){
    window.print();
  }

  return (
    <div className="flex">
      <Sidebaar2 />
      <div className="flex-1 min-h-screen">
        <Navbaar onPrint={onPrint} />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Check In</h2>

          {/* Tabs */}
          <div className="flex gap-2 mb-4">
            {tabs.map(t => (
              <button key={t} onClick={() => setActiveTab(t)}
                className={`px-4 py-2 rounded-t ${activeTab===t ? 'bg-white border-t border-l border-r' : 'bg-gray-200'}`}>
                {t}
              </button>
            ))}
          </div>

          <div className="bg-white p-6 rounded-b shadow">
            {/* Quick + Details combined UI like screenshot */}
            { (activeTab === 'Quick' || activeTab === 'Details') && (
              <form onSubmit={saveCheckIn} className="grid grid-cols-3 gap-6">
                {/* Column 1 */}
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Guest Name *</label>
                    <div className="flex mt-1">
                      <select value={form.title} onChange={e=>updateField('title', e.target.value)} className="border rounded-l px-3 py-2">
                        <option>Mr</option><option>Mrs</option><option>Ms</option>
                      </select>
                      <input value={form.guestName} onChange={e=>updateField('guestName', e.target.value)} placeholder="Name" className="flex-1 border rounded-r px-3 py-2" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Guest Mobile</label>
                    <input value={form.mobile} onChange={e=>updateField('mobile', e.target.value)} className="w-full border px-3 py-2 rounded" />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Arr. Detail</label>
                    <input type="datetime-local" value={form.arrDate} onChange={e=>updateField('arrDate', e.target.value)} className="w-full border px-3 py-2 rounded" />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Dep. Detail</label>
                    <input type="datetime-local" value={form.depDate} onChange={e=>updateField('depDate', e.target.value)} className="w-full border px-3 py-2 rounded" />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Company</label>
                    <select value={form.company} onChange={e=>updateField('company', e.target.value)} className="w-full border px-3 py-2 rounded">
                      <option value="">Select Company Name</option>
                      <option>Company A</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Plan</label>
                    <select value={form.plan} onChange={e=>updateField('plan', e.target.value)} className="w-full border px-3 py-2 rounded">
                      <option>AMERICAN PLAN</option>
                      <option>CONTINENTAL</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">WiFi Detail</label>
                    <input placeholder="WiFi User Name" value={form.wifiUser} onChange={e=>updateField('wifiUser', e.target.value)} className="w-full border px-3 py-2 rounded mb-2" />
                    <input placeholder="WiFi Password" value={form.wifiPass} onChange={e=>updateField('wifiPass', e.target.value)} className="w-full border px-3 py-2 rounded" />
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Gr No.</label>
                    <input className="w-full border px-3 py-2 rounded" value="23/9" readOnly />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Folio No.</label>
                    <input className="w-full border px-3 py-2 rounded" placeholder="Folio No." />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input value={form.email} onChange={e=>updateField('email', e.target.value)} className="w-full border px-3 py-2 rounded" />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="text-sm font-medium">No. of Room</label>
                      <input type="number" value={form.noOfRoom} onChange={e=>updateField('noOfRoom', e.target.value)} className="w-full border px-3 py-2 rounded"/>
                    </div>
                    <div>
                      <label className="text-sm font-medium">No. of Night *</label>
                      <input type="number" value={form.noOfNight} onChange={e=>updateField('noOfNight', e.target.value)} className="w-full border px-3 py-2 rounded"/>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Pax</label>
                      <select value={form.paxType} onChange={e=>updateField('paxType', e.target.value)} className="w-full border px-3 py-2 rounded">
                        <option>Male</option><option>Female</option><option>Child</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Deal</label>
                    <select value={form.deal} onChange={e=>updateField('deal', e.target.value)} className="w-full border px-3 py-2 rounded">
                      <option value="">Select Deal</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Master Room</label>
                    <input value={form.masterRoom} onChange={e=>updateField('masterRoom', e.target.value)} className="w-full border px-3 py-2 rounded" />
                  </div>

                  <div>
                    <label className="text-sm font-medium">ID Type</label>
                    <select value={form.idType} onChange={e=>updateField('idType', e.target.value)} className="w-full border px-3 py-2 rounded">
                      <option value="">Select ID Type</option>
                      <option>Aadhar</option><option>Passport</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">ID Number</label>
                    <input value={form.idNumber} onChange={e=>updateField('idNumber', e.target.value)} className="w-full border px-3 py-2 rounded" />
                  </div>
                </div>

                {/* Column 3 - Photos & toggles & save */}
                <div className="space-y-4">
                  <PhotoUploader label="Guest Photo" images={guestPhotos} setImages={setGuestPhotos} multiple={false} />
                  <PhotoUploader label="Extra Person Photo(s)" images={extraPersons} setImages={setExtraPersons} multiple={true} />

                  {/* Toggles and GST number near top-right as requested */}
                  <div className="flex items-center gap-4 mt-4">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" checked={false} onChange={()=>{}}/>
                      Wedding Booking
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" checked={isGST} onChange={e=>setIsGST(e.target.checked)}/>
                      GST 18% Applicable
                    </label>
                  </div>

                  {isGST && (
                    <div>
                      <label className="text-sm font-medium">GST Number</label>
                      <input value={gstNumber} onChange={e=>setGstNumber(e.target.value)} placeholder="Enter GSTIN" className="w-full border px-3 py-2 rounded" />
                    </div>
                  )}

                  <div className="mt-6">
                  <button 
  type="submit" 
  onClick={(e) => { 
    handleCheckIn(e); 
    saveCheckIn(); 
  }} 
  className="w-full bg-blue-600 text-white py-2 rounded"
>
  Save Check-In
</button>
                  </div>
                </div>
              </form>
            )}

            {/* Photo tab (more large view) */}
            {activeTab === 'Photo' && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-2">Guest Photo</h3>
                  <PhotoUploader label="Guest Photo" images={guestPhotos} setImages={setGuestPhotos} multiple={false} />
                </div>
                <div>
                  <h3 className="font-medium mb-2">Extra Person Photos</h3>
                  <PhotoUploader label="Extra Person Photo(s)" images={extraPersons} setImages={setExtraPersons} multiple={true} />
                </div>
              </div>
            )}

            {/* Posting tab: show posting fields + summary logic */}
            {activeTab === 'Posting' && (
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium">Base Tariff</label>
                    <input type="number" value={posting.baseTariff} onChange={e=>updatePosting('baseTariff', Number(e.target.value))} className="w-full border px-3 py-2 rounded" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-sm font-medium">Extra Person Charge</label>
                      <input type="number" value={posting.extraPersonCharge} onChange={e=>updatePosting('extraPersonCharge', Number(e.target.value))} className="w-full border px-3 py-2 rounded" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Extra Person Count</label>
                      <input type="number" value={posting.extraPersonCount} onChange={e=>updatePosting('extraPersonCount', Number(e.target.value))} className="w-full border px-3 py-2 rounded" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Other Charges</label>
                    <input type="number" value={posting.otherCharges} onChange={e=>updatePosting('otherCharges', Number(e.target.value))} className="w-full border px-3 py-2 rounded" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Discount</label>
                    <input type="number" value={posting.discount} onChange={e=>updatePosting('discount', Number(e.target.value))} className="w-full border px-3 py-2 rounded" />
                  </div>
                </div>

                <div className="border p-4 rounded">
                  <h4 className="font-medium mb-3">Posting Summary</h4>
                  <div className="flex justify-between"><div>Base Tariff</div><div>₹ {summary.base.toFixed(2)}</div></div>
                  <div className="flex justify-between"><div>Extra Person</div><div>₹ {summary.extra.toFixed(2)}</div></div>
                  <div className="flex justify-between"><div>Other Charges</div><div>₹ {summary.other.toFixed(2)}</div></div>
                  <div className="flex justify-between"><div>Discount</div><div>- ₹ {summary.discount.toFixed(2)}</div></div>
                  <hr className="my-2" />
                  <div className="flex justify-between"><div>Subtotal</div><div>₹ {summary.subtotal.toFixed(2)}</div></div>
                  <div className="flex justify-between"><div>GST ({(summary.gstRate*100).toFixed(0)}%)</div><div>₹ {summary.gstAmount.toFixed(2)}</div></div>
                  <hr className="my-2" />
                  <div className="flex justify-between font-bold"><div>Total</div><div>₹ {summary.total.toFixed(2)}</div></div>
                </div>
              </div>
            )}

            {/* GST tab: show GST info */}
            {activeTab === 'GST' && (
              <div>
                <div className="mb-3">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={isGST} onChange={e=>setIsGST(e.target.checked)} />
                    <span>Apply GST 18%</span>
                  </label>
                </div>
                {isGST && (
                  <div>
                    <label className="text-sm font-medium">GST Number</label>
                    <input value={gstNumber} onChange={e=>setGstNumber(e.target.value)} placeholder="GSTIN" className="w-1/2 border px-3 py-2 rounded" />
                  </div>
                )}
              </div>
            )}

            {/* Reservation tab: placeholder */}
            {activeTab === 'Reservation' && (
              <div>
                <p>Reservation / Booking specific options will be placed here.</p>
              </div>
            )}

            {/* bottom actions: Save & Preview */}
            <div className="mt-6 flex justify-end gap-3">
              <button type="button" onClick={() => { navigator.clipboard?.writeText(JSON.stringify({form, guestPhotos, extraPersons, posting, gst: isGST?gstNumber:null})); alert('Copied payload to clipboard (for testing)') }} className="px-4 py-2 border rounded">Copy Payload</button>
              <button onClick={saveCheckIn} className="px-6 py-2 bg-blue-600 text-white rounded">Save Check-In</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
