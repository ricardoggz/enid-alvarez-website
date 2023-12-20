import '../../globals.css'
import { SelectProduct } from './components/SelectProduct/SelectProduct'
import { RootLayout, Container } from '@/components'
export default function Gallery(){
    return(
        <RootLayout>
            <Container>
                <SelectProduct />
            </Container>
        </RootLayout>
    )
}