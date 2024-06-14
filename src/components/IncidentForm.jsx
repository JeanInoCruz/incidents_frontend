const IncidentForm = ({ onSubmit, buttonText, subject, setSubject, type, setType, description, setDescription, location, setLocation, setImage }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <select value={type} onChange={(e) => setType(e.target.value)} required>
        <option value="">Select Type</option>
        <option value="cleaning">Cleaning</option>
        <option value="maintenance">Maintenance</option>
        <option value="plumbing">Plumbing</option>
        <option value="electrical">Electrical</option>
        <option value="security">Security</option>
        <option value="HVAC">HVAC</option>
        <option value="landscaping">Landscaping</option>
        <option value="elevator">Elevator</option>
        <option value="pest_control">Pest Control</option>
        <option value="other">Other</option>
      </select>
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <select value={location} onChange={(e) => setLocation(e.target.value)} required>
        <option value="">Select Location</option>
        <optgroup label="Residential Areas">
          <option value="101">101</option>
          <option value="102">102</option>
          <option value="103">103</option>
          <option value="104">104</option>
          <option value="201">201</option>
          <option value="202">202</option>
          <option value="203">203</option>
          <option value="204">204</option>
          <option value="301">301</option>
          <option value="302">302</option>
          <option value="303">303</option>
          <option value="304">304</option>
          <option value="401">401</option>
          <option value="402">402</option>
          <option value="403">403</option>
          <option value="404">404</option>
          <option value="501">501</option>
          <option value="502">502</option>
          <option value="503">503</option>
          <option value="504">504</option>
        </optgroup>
        <optgroup label="Common Areas">
          <option value="common_area_1">Common Area 1</option>
          <option value="common_area_2">Common Area 2</option>
          <option value="common_area_3">Common Area 3</option>
          <option value="common_area_4">Common Area 4</option>
          <option value="common_area_5">Common Area 5</option>
          <option value="reception_hall">Reception Hall</option>
          <option value="parking_lot">Parking Lot</option>
          <option value="rooftop">Rooftop</option>
        </optgroup>
      </select>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} accept="image/*" />
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default IncidentForm;
