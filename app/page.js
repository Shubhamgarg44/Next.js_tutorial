import Navbar from '@/components/Navbar';

import { submitAction } from '@/actions/form';

export default function Page() {
  return (
    <div>
      <Navbar />
      <form action={submitAction}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" className="text-blue-600" />
        </div>
        <div>
          <label htmlFor="add">Address:</label>
          <input type="text" name="add" id="add" className="text-blue-600" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}