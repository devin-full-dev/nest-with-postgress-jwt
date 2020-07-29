import Address from './address.entity';
import Post from '../posts/post.entity';
declare class User {
    id: number;
    email: string;
    name: string;
    password: string;
    address: Address;
    posts: Post[];
}
export default User;
