const Skills: React.FC = () => {
  return (
    <section>
      <h2>My Skills</h2>
      <ul>
        {/* C# 관련 기술 */}
        <li>
          <h3>C# - WPF</h3>
          <p>WPF 프레임워크를 이용한 데스크탑 애플리케이션 개발 경험.</p>
        </li>
        <li>
          <h3>C# DLL Development</h3>
          <p>C#을 이용한 DLL 개발 및 외부 시스템과의 연동 경험.</p>
        </li>
        <li>
          <h3>MVVM Pattern (WPF)</h3>
          <p>WPF 애플리케이션 개발 시 MVVM 패턴을 적용하여 UI와 로직 분리 경험.</p>
        </li>

        {/* Java 관련 기술 */}
        <li>
          <h3>Java - Spring Framework (Legacy)</h3>
          <p>Spring Framework를 이용한 레거시 시스템 개발 및 유지보수 경험.</p>
        </li>

        {/* iOS 관련 기술 */}
        <li>
          <h3>iOS - Swift + Storyboard</h3>
          <p>Swift와 UIKit을 활용하여 iOS 애플리케이션 개발 및 Storyboard 기반 UI 설계.</p>
        </li>

        {/* 데이터베이스 관련 기술 */}
        <li>
          <h3>MS SQL Server</h3>
          <p>MS SQL Server를 이용한 데이터베이스 설계 및 관리.</p>
        </li>
        <li>
          <h3>MySQL</h3>
          <p>MySQL 데이터베이스 설계 및 쿼리 작성 경험.</p>
        </li>
        <li>
          <h3>MariaDB</h3>
          <p>MariaDB를 활용한 데이터베이스 관리 및 최적화 경험.</p>
        </li>

        {/* JavaScript 관련 기술 */}
        <li>
          <h3>JavaScript</h3>
          <p>웹 애플리케이션 개발을 위한 JavaScript 코드 작성 경험.</p>
        </li>
        <li>
          <h3>MVC Pattern</h3>
          <p>웹 애플리케이션의 구조화 및 관리에 MVC 패턴 적용 경험.</p>
        </li>

        {/* Android 관련 기술 */}
        <li>
          <h3>Android</h3>
          <p>Android Studio와 Java를 이용한 안드로이드 애플리케이션 개발 경험.</p>
        </li>
      </ul>
    </section>
  );
};

export default Skills;