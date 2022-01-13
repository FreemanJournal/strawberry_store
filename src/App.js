
import { PDFViewer } from '@react-pdf/renderer';
import './App.css';
import CustomerManagement from './component/customer_management/CustomerManagement';
import ReceiptPDF from './component/customer_management/ReceiptPDF';
import ReceiptWeb from './component/customer_management/ReceiptWeb';
import PdfGeneratorV2 from './component/PdfGeneratorV2/PdfGeneratorV2'
function App() {
  return (
    <div className="App">
      <CustomerManagement/>
    </div>
  );
}

export default App;
