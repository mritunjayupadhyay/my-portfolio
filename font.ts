import { Inter, Poppins, Work_Sans } from 'next/font/google'

const poppins = Poppins({ 
    variable: '--font-poppins',
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900']
 });
const workSans = Work_Sans({ 
    variable: '--font-worksans',
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900']
 });

export { poppins, workSans};