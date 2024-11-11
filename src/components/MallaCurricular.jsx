import React, { useState, useEffect } from 'react';
import './MallaCurricular.css';

const MallaCurricular = () => {
  const [datos, setDatos] = useState([]);
  const [activeSubject, setActiveSubject] = useState(null);

  useEffect(() => {
    fetch('./subjects.json')
      .then((response) => response.json())
      .then((data) => setDatos(data.subjects || []))
      .catch((error) => console.error('Error al cargar los datos:', error));
  }, []);

  const obtenerClaseColor = (subject) => {
    if (activeSubject?.prev?.includes(subject.name)) return 'prev-highlight';
    if (activeSubject?.next?.includes(subject.name)) return 'next-highlight';
    return '';
  };

  const semestres = [...new Set(datos.map((item) => item.semester))];

  return (
    <div className="malla-container">
      <h1 className="title">Malla Curricular</h1>
      <table className="malla-table">
        <thead>
          <tr>
            {semestres.map((semestre, index) => (
              <th key={index} className="semester-header">{`Semestre ${semestre}`}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {semestres.map((semestre, index) => (
              <td key={index} className="subject-column">
                {datos
                  .filter((item) => item.semester === semestre)
                  .map((subject, i) => (
                    <div
                      key={i}
                      className={`subject-name ${obtenerClaseColor(subject)}`}
                      onMouseEnter={() => setActiveSubject(subject)}
                      onMouseLeave={() => setActiveSubject(null)}
                    >
                      {subject.name}
                    </div>
                  ))}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MallaCurricular;
