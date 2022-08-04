import Home from '../pages/Home'
import { render } from '@testing-library/react'

describe('Home', () => {
    test('renders Home Component', ()=>{
        render(<Home/>)
    }) 
})