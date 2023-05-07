import CategoryItem from '../category-item/CategoryItem';
import './CategoryList.styles.scss';

interface Category {
  id: number;
  title: string;
  imageUrl: string;
}

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(category => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default CategoryList;
