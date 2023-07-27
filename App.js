import {StyledMainScreen} from './MainScreen';
import { useEffect } from 'react';
import ScreenController from './components/screen-controller/ScreenController';
import { openDatabase } from "react-native-sqlite-storage";

const db = openDatabase({ 
    name: 'totalsDatabase.db' 
});

const App = () => {

  const CreateTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20))',
        [],
        (sqlTxn, res) => {
          console.log("Table created");
        },
        error  => {
          console.log("Error " + error.message);
        }
      )
    })
  };

  useEffect(() => {
    CreateTables();
  }, [])

  return (
    <StyledMainScreen>
      <ScreenController />
    </StyledMainScreen>
  );
}

export default App;

