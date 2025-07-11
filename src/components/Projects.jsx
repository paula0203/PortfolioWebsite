import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from '../ComputerV2';
import LittleMonster from '../LittleMonster1';
import './Projects.css';

const projects = [
	{
		title: '3D COMPUTER',
		subtitle: 'A Simple Desktop Computer Model',
		image: (
			<Canvas style={{ width: '100%', height: '100%' }}>
				<ambientLight intensity={0.8} />
				<directionalLight position={[2, 5, 2]} intensity={1.2} />
				<Model scale={0.8} position={[0, -1.5, 0]} />
				<OrbitControls enablePan={false} enableZoom={false} />
			</Canvas>
		),
	},
	{
		title: 'LITTLE MONSTER',
		subtitle: 'A cute and a bit (not) scary little creature',
		image: (
			<Canvas
				style={{ width: '100%', height: '100%' }}
				camera={{ position: [0, 2, 12], fov: 35 }}
			>
				<ambientLight intensity={0.8} />
				<directionalLight position={[2, 5, 2]} intensity={0.7} />
				<LittleMonster scale={[0.7, 0.25, 0.7]} position={[0, 0, 0]} />
				<OrbitControls enablePan={false} enableZoom={false} />
			</Canvas>
		),
	},
];

const Projects = () => {
	const [hoveredIdx, setHoveredIdx] = useState(null);
	const [selectedIdx, setSelectedIdx] = useState(0);
	const [theme, setTheme] = useState(document.body.getAttribute('data-theme') || 'dark');
	const [fadeKey, setFadeKey] = useState(0);

	const showIdx = hoveredIdx !== null ? hoveredIdx : selectedIdx;

	useEffect(() => {
		setFadeKey(showIdx); // Cambia la key para reiniciar la animación
	}, [showIdx]);

	const getTitleColor = (isHovered, isSelected) => {
		if (theme === 'light') {
			if (isHovered) return 'var(--brand-main)'; // azul clarito en hover
			return 'var(--beige)'; // beige normal
		} else {
			if (isHovered) return '#E85002'; // naranja en hover
			return 'var(--beige)'; // beige normal
		}
	};

	return (
		<section
			id="projects"
			className="section-fade visible"
			style={{
				background: 'var(--bg-main)',
				padding: '80px 0',
				minHeight: 600,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<h1
				style={{
					fontFamily: "'Poppins', monospace",
					fontWeight: 800,
					fontSize: '3.5rem',
					color: 'var(--text-main)',
					letterSpacing: '0.1em',
					textTransform: 'uppercase',
					textAlign: 'center',
					margin: 0,
					marginBottom: 40,
				}}
			>
				MY PROJECTS
			</h1>

			<div
				style={{
					display: 'flex',
					width: '100%',
					maxWidth: 1100,
					minHeight: 400,
					gap: 0,
					background: 'none',
				}}
			>
				{/* HUECO IZQUIERDA */}
				<div
					style={{
						flex: 2,
						minWidth: 340,
						maxWidth: 540,
						background: '#181818',
						borderRadius: '16px 0 0 16px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
						transition: 'box-shadow 0.3s',
					}}
				>
					<div
						key={fadeKey}
						style={{
							width: '90%',
							height: 320,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							opacity: 1,
							transform: 'translateY(0)',
							animation: 'fadeCard 0.5s cubic-bezier(.4,0,.2,1)',
						}}
					>
						<h3
							style={{
								fontFamily: "'Poppins', sans-serif",
								fontWeight: 400,
								fontSize: '1.3rem',
								color: '#cccccc', // gris claro fijo
								marginBottom: 24,
								textAlign: 'center',
								minHeight: 32,
							}}
						>
							{projects[showIdx].subtitle}
						</h3>
						<div
							style={{
								width: '100%',
								height: 220,
								borderRadius: 12,
								overflow: 'hidden',
								background: '#222',
							}}
						>
							{projects[showIdx].image}
						</div>
					</div>
				</div>

				{/* ÍNDICE DERECHA */}
				<div
					style={{
						flex: 1,
						minWidth: 200,
						background: '#1a1a1a',
						borderRadius: '0 16px 16px 0',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
						padding: '32px 0',
					}}
				>
					{projects.map((project, idx) => {
						const isHovered = hoveredIdx === idx;
						const isSelected = showIdx === idx;
						return (
							<div
								key={project.title}
								className="project-index-item"
								style={{
									fontFamily: "'JetBrains Mono', monospace",
									fontWeight: 700,
									fontSize: '1.1rem',
									color: getTitleColor(isHovered, isSelected),
									background: isSelected ? '#232323' : 'none',
									padding: '18px 32px',
									cursor: 'pointer',
									textTransform: 'uppercase',
									letterSpacing: '0.04em',
									border: 'none',
									outline: 'none',
									transition: 'background 0.2s, color 0.2s',
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'flex-start',
								}}
								onMouseEnter={() => setHoveredIdx(idx)}
								onMouseLeave={() => setHoveredIdx(null)}
								onClick={() => setSelectedIdx(idx)}
								tabIndex={0}
							>
								<span>{project.title}</span>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Projects;