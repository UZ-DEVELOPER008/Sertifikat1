import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function NativeSelectDemo() {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Agarda daqiqa, SMS yoki GB tugasa
        </InputLabel>
        <NativeSelect className='shart'
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>«Perezagruzka» xizmatini yoqtirish orqali siz tarif rejangiz bo’yicha taqdim etiladigan daqiqa,
          SMS va GB paketlarini muddatidan <br /> avval olishingiz mumkin.</option>
          <option value={20}>«Perezagruzka» xizmatining narxi har bir so’rov uchun – 2000 so’m.</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}