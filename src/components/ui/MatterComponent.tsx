"use client"

import {useEffect, useRef} from 'react';
import Matter, {
    Engine,
    Render,
    Runner,
    Bodies,
    World,
    Events,
    Mouse,
    MouseConstraint,
    Body,
    Composite
} from 'matter-js';

const MatterComponent: React.FC = () => {
    const matterBl = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!matterBl.current) return;

        const engine = Engine.create();
        const world = engine.world;
        let render: Render | null = null;
        let runner: Runner | null = null;
        const walls: Matter.Body[] = [];
        const cubes: Matter.Body[] = [];

        const cubeSize = 40; // Размер каждого куба
        const texture = './assets/images/logo.svg';
        const cubeCount = 30; // Количество кубов

        const init = () => {
            if (render) Render.stop(render);
            if (runner) Runner.stop(runner);
            Composite.clear(world, false);

            // Создание рендера
            render = Render.create({
                element: matterBl.current!,
                engine: engine,
                options: {
                    width: matterBl.current!.clientWidth,
                    height: matterBl.current!.clientHeight,
                    wireframes: false,
                    background: "transparent"
                },
            });

            walls.push(
                Bodies.rectangle(matterBl.current!.clientWidth / 2, 0, matterBl.current!.clientWidth, 20, {
                    isStatic: true,
                    render: {fillStyle: 'transparent'}
                }),
                Bodies.rectangle(matterBl.current!.clientWidth / 2, matterBl.current!.clientHeight, matterBl.current!.clientWidth, 20, {
                    isStatic: true,
                    render: {fillStyle: 'transparent'}
                }),
                Bodies.rectangle(0, matterBl.current!.clientHeight / 2, 20, matterBl.current!.clientHeight, {
                    isStatic: true,
                    render: {fillStyle: 'transparent'}
                }),
                Bodies.rectangle(matterBl.current!.clientWidth, matterBl.current!.clientHeight / 2, 20, matterBl.current!.clientHeight, {
                    isStatic: true,
                    render: {fillStyle: 'transparent'}
                })
            );

            World.add(world, walls);

            for (let i = 0; i < cubeCount; i++) {
                const randomX = Math.random() * (matterBl.current!.clientWidth - cubeSize) + cubeSize / 2;
                const randomY = Math.random() * (matterBl.current!.clientHeight - cubeSize) + cubeSize / 2;

                const cube = Bodies.rectangle(
                    randomX, // Случайная позиция X
                    randomY, // Случайная позиция Y
                    cubeSize,
                    cubeSize,
                    {
                        restitution: 0.3,
                        render: {
                            sprite: {
                                texture: texture,
                                xScale: 1,
                                yScale: 1
                            }
                        }
                    }
                );

                cubes.push(cube);
            }


            World.add(world, cubes);

            Render.run(render);
            runner = Runner.create();
            Runner.run(runner, engine);

            Events.on(engine, "beforeUpdate", () => {
                cubes.forEach((cube) => {
                    const {x, y} = cube.position;
                    const halfSize = cubeSize / 2;

                    if (x - halfSize < 0) {
                        Body.setPosition(cube, {x: halfSize, y});
                        Body.setVelocity(cube, {x: Math.abs(cube.velocity.x), y: cube.velocity.y});
                    }
                    if (x + halfSize > matterBl.current!.clientWidth) {
                        Body.setPosition(cube, {x: matterBl.current!.clientWidth - halfSize, y});
                        Body.setVelocity(cube, {x: -Math.abs(cube.velocity.x), y: cube.velocity.y});
                    }
                    if (y - halfSize < 0) {
                        Body.setPosition(cube, {x, y: halfSize});
                        Body.setVelocity(cube, {x: cube.velocity.x, y: Math.abs(cube.velocity.y)});
                    }
                    if (y + halfSize > matterBl.current!.clientHeight) {
                        Body.setPosition(cube, {x, y: matterBl.current!.clientHeight - halfSize});
                        Body.setVelocity(cube, {x: cube.velocity.x, y: -Math.abs(cube.velocity.y)});
                    }
                });
            });

            const mouse = Mouse.create(render.canvas);
            const mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {visible: false}
                }
            });
            World.add(world, mouseConstraint);
            render.mouse = mouse;
        };

        init();

        return () => {
            if (render) Render.stop(render);
            if (runner) Runner.stop(runner);
            World.clear(world, true);
            Engine.clear(engine);
            if (render?.canvas) render.canvas.remove();
            render!.textures = {};
        };
    }, []);

    return <div ref={matterBl} className={'w-[32rem] h-[29.875rem] border border-[#DEDEDE] rounded-[2rem]'}/>
};

export default MatterComponent;