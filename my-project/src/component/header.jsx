import PropTypes from 'prop-types';

export default function Header({header = 'Pokemon List'}) {
  return (
    <header>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
          {header}
        </h1>
      </div>
    </header>
  );
}

Header.propTypes = {
    header: PropTypes.string, // Especifica el tipo de 'header' como una cadena (string)
  };