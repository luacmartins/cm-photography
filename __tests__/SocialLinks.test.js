import SocialLinks from '../components/SocialLinks'
import renderer from 'react-test-renderer'

test('should render social links correctly', () => {
   const component = renderer.create(<SocialLinks />)
   expect(component).toMatchSnapshot()
})