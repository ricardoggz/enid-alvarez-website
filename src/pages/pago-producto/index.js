import '../../globals.css'
import { SelectProduct } from './components/SelectProduct/SelectProduct'
import { RootLayout } from '@/components'
export default function Gallery(){
    return(
        <RootLayout>
            <SelectProduct />
        </RootLayout>
    )
}