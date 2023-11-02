import React, { useEffect } from 'react';
import ReactPDF, {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer';
import { collection, getDocs } from 'firebase/firestore';

import { db } from './firebase';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const App: React.FC = () => {
  const fetchPost = async () => {
    await getDocs(collection(db, 'cards')).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log({ newData });
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <PDFViewer>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Section #1</Text>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

// ReactPDF.render(<App />, `${__dirname}/example.pdf`);

export default App;
