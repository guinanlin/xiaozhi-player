# 小智播放插件组件

## 概述
小智播放插件是一个基于 Taro 框架的 React 组件，旨在提供简单易用的播放功能。该组件允许用户自定义按钮文案，并通过配置文件进行灵活的设置。

## 组件结构
该组件的主要文件结构如下：

- **com.json**: 组件的元数据，包括标题、命名空间、作者、图标、版本、描述和运行时文件路径等。
- **data.json**: 组件的默认数据，包含初始文本内容。
- **editors.tsx**: 组件的编辑器配置，定义了组件的初始化、调整大小和双击事件处理。
- **icon.svg**: 组件的图标文件，使用 SVG 格式。
- **runtime.tsx**: 组件的运行时逻辑，负责渲染按钮并显示文本。
- **style.less**: 组件的样式文件，定义了按钮的外观和布局。

## 组件功能

### 1. 初始化
在 `editors.tsx` 中，组件的初始化设置了按钮的默认宽度和高度。

### 2. 数据绑定
组件支持双击事件，允许用户通过双击按钮来编辑文本内容。文本内容通过 `data.text` 进行绑定。

### 3. 样式
按钮的样式在 `style.less` 中定义，具有灵活的布局和美观的外观。按钮的背景色为橙色，文字颜色为白色，边角为圆形。

### 4. 运行时
在 `runtime.tsx` 中，组件使用 Taro 的 `Button` 组件进行渲染，显示用户设置的文本内容。

## 使用示例
用户可以通过配置 `com.json` 文件来设置组件的基本信息和运行时行为。默认情况下，按钮的文本为 "Hello World"，用户可以通过编辑器进行修改。

## 依赖
该组件依赖于以下库：
- `@tarojs/components`: Taro 组件库，用于构建跨平台应用。
- `react`: React 库，用于构建用户界面。

## 版本信息
- **版本**: 1.0.0
- **作者**: mybricks-team
- **命名空间**: dty.xiaozhiPlayer

## 许可证
该组件遵循 MIT 许可证，用户可以自由使用和修改。
