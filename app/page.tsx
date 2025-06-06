// app/page.tsx
import Sidebar from './components/Sidebar';

export default function HomePage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-xl font-bold mb-4">Welcome to Old Question Papers</h1>
        <p>Choose an exam and year from the sidebar to get started.</p>
      </div>
    </div>
  );
}